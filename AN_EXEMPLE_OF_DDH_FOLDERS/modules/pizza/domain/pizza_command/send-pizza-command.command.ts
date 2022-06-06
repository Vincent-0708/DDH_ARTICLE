import { ICommand } from "@nestjs/cqrs";
import Result from "../../../../libs/result/result";
import { ClientAddressNotUnderstood, DeliveryGuyLost } 
    from "../../errors/pizza-command-delivery.error";
import { PizzaEntity } from "../create_pizza/entities/pizza.entity";
import { PizzaCommandAggregate } from "./aggregates/pizza-command.aggregate";


type SendPizzaCommandPayload = 
{ pizzaCommand : PizzaCommandAggregate, pizzasToSend:PizzaEntity[] };

export type SendPizzaCommandResult =
 Result<void, DeliveryGuyLost | ClientAddressNotUnderstood>;

export class SendPizzaCommand implements ICommand {
    constructor( public readonly payload: SendPizzaCommandPayload ) {}
}
