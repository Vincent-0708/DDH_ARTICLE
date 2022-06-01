import { Inject } from "@nestjs/common";
import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { SendPizzaCommand, SendPizzaCommandResult } from "./send-pizza-command.command";
import { SendPizzaCommandWithDeliveryGuyPort } from "./send-pizza-command-with-delivery-guy.port";
import { PizzaEntity } from "../create_pizza/entities/pizza.entity";
import { ClientAddressNotUnderstood, DeliveryGuyLost } from "../../errors/pizza-command-delivery.error";
import Result from "../../../../libs/result/result";
import { GetClientInformationPresenter } from "../../../client/interface/get-client-information.presenter";
import { PizzaCommandSentEvent } from "./events/pizza-command-sent.event";
import { getScheduledDeliveryDate } from "../../../../libs/utils/get-scheduled-delivery-date";

@CommandHandler(SendPizzaCommand)
export class SendPizzaCommandHandler implements ICommandHandler<SendPizzaCommand> {
  
  constructor(
    @Inject(PizzaEntity)
    private readonly sendPizzaCommandWithDeliveryGuyPort: Pick<SendPizzaCommandWithDeliveryGuyPort,
     "writeDownDeliveryAddress"
     | "moveFromPizzeriaToDeliveryAddress"
     | "takePizzas">,
     @Inject(GetClientInformationPresenter)
    private getClientInformationPresenter : GetClientInformationPresenter,
    private eventBus:EventBus,
  ) {}

  public async execute({ payload }: SendPizzaCommand): Promise<SendPizzaCommandResult> {
    const { pizzaCommand, pizzasToSend } = payload;

    const clientId = pizzaCommand.getClientId()
    const address = this.getClientInformationPresenter.getClientAddress(clientId);

    const doesTheDeliveryGuyUnderstandTheAddress = 
    await this.sendPizzaCommandWithDeliveryGuyPort.writeDownDeliveryAddress(address)

    if (!doesTheDeliveryGuyUnderstandTheAddress) {
        const errorWithAddress = new ClientAddressNotUnderstood()
        return Result.err(errorWithAddress);
    }

    this.sendPizzaCommandWithDeliveryGuyPort.takePizzas(pizzasToSend);

    const plannedDeliveryDate = getScheduledDeliveryDate()
    this.eventBus.publish(new PizzaCommandSentEvent({clientId,plannedDeliveryDate}))

    const doesTheDeliveryGuyReachedTheAddress = 
    await this.sendPizzaCommandWithDeliveryGuyPort.moveFromPizzeriaToDeliveryAddress();
    if(!doesTheDeliveryGuyReachedTheAddress){
        const errorWithDelivery = new DeliveryGuyLost();
        return Result.err(errorWithDelivery);
    }
    return Result.ok();

  }
};