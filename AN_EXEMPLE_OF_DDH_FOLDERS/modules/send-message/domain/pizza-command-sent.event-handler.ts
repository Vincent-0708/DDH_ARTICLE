import { CommandBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { GetClientInformationPresenter } from "../../client/interface/get-client-information.presenter";
import { PizzaCommandSentEvent } from "../../pizza/domain/pizza_command/events/pizza-command-sent.event";
import { 
    SendMessageToClientCommand,
    SendMessageToClientCommandResult
} from "./send-message-to-client.command";

@EventsHandler(PizzaCommandSentEvent)
export class PizzaCommandSentEventHandler implements IEventHandler<PizzaCommandSentEvent>{

    constructor(
        private readonly commandBus:CommandBus,
        private getClientInformationPresenter:GetClientInformationPresenter
    ){}

    async handle({payload}:PizzaCommandSentEvent) : Promise<void> {
        const {clientId, plannedDeliveryDate} = payload;
        const clientPhoneNumber = 
        this.getClientInformationPresenter.getClientPhoneNumberAsString(clientId)
        const message = `Your pizzas are supposed to be delivered at : ${plannedDeliveryDate}`

        await this.commandBus.execute<SendMessageToClientCommand,SendMessageToClientCommandResult>(
            new SendMessageToClientCommand({clientPhoneNumber, message})
        )
    }
}

