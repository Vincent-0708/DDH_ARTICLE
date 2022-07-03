import { IEvent } from "@nestjs/cqrs";
import { PizzaCommandAggregate } from "../aggregates/pizza-command.aggregate";

export class PizzaCommandSentEvent implements IEvent{
    constructor(
        public readonly payload : {
            clientId: PizzaCommandAggregate["clientId"];
            plannedDeliveryDate : string;
        }
    ){}
}