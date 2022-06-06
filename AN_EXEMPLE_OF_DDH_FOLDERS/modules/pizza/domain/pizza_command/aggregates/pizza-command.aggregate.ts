import { Injectable } from "@nestjs/common";
import Result from "../../../../../libs/result/result";
import { PizzaCommandDataAreNotValid } from "../../../errors/pizza-command.error";
import { PizzaEntity } from "../../create_pizza/entities/pizza.entity";
import { PizzaCommandPrice } from "../value-objects/pizza-command-price.value-object";

export type PizzaCommandAggregateAttributes = {
    clientId : string;
    content :PizzaEntity["id"][];
    price: PizzaCommandPrice;
}

@Injectable()
export class PizzaCommandAggregate {
    protected clientId : PizzaCommandAggregateAttributes["clientId"];
    protected content: PizzaCommandAggregateAttributes["content"];
    protected price: PizzaCommandAggregateAttributes["price"];

    private constructor( pizzaCommand:Omit<PizzaCommandAggregateAttributes, "price"> ){
        this.clientId = pizzaCommand.clientId;
        this.content = pizzaCommand.content;
    }

    public static createPizzaCommand( pizzaCommand:PizzaCommandAggregateAttributes ) : 
    Result<PizzaCommandAggregate, PizzaCommandDataAreNotValid>
    {
        if ( !PizzaCommandAggregate.validate( pizzaCommand ) ){
            return Result.err( new PizzaCommandDataAreNotValid() );
        } else {
            return Result.ok( new PizzaCommandAggregate( { ...pizzaCommand } ) );
        }
    }

    protected static validate(
        pizzaCommand:Omit<PizzaCommandAggregateAttributes, "price"> ):boolean
    {
        if ( !pizzaCommand.clientId ){
            return false;
        }
        if ( !pizzaCommand.content || pizzaCommand.content.length === 0 ){
            return ( false );
        }
        // other validation rules to respect domain invariants 
        return ( true );
    }

    protected calculatePizzaCommandPrice():void{
        // Business logic to calculate a command price
        const commandPrice: PizzaCommandPrice = "price";
        this.price = commandPrice; 
    }

    public addPizzaToContent( _pizza:PizzaEntity ):void{
        // logic to add a pizza to the pizza attribute AND to update the price 
    }

    public getClientId():PizzaCommandAggregateAttributes["clientId"] {
        return this.clientId.toString();
    }
}

