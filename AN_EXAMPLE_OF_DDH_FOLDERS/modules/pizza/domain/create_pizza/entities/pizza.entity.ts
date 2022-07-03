import Result from "../../../../../libs/result/result";
import { PizzaDataAreNotValid } from "../../errors/pizza.error";
import { IngredientEntity } from "./ingredient.entity";
import { PizzaPrice } from "../value-objects/pizza-price.value-object";
import { generateId } from "../../../../../libs/utils/generate-random-string-id";
import { Injectable } from "@nestjs/common";

enum PizzaEntityStateEnum {
    ORDERED="ORDERED",
    WAITING_FOR_OVEN="WAITING_FOR_OVEN",
    READY="READY",
    GIVEN_TO_THE_CLIENT="GIVEN_TO_THE_CLIENT"
}

export type PizzaEntityAttributes = {
    id: string
    ingredients: IngredientEntity[];
    price: PizzaPrice;
    name: string;
    state : PizzaEntityStateEnum
}

@Injectable()
export class PizzaEntity {
    protected id: PizzaEntityAttributes["id"];
    protected ingredients: PizzaEntityAttributes["ingredients"];
    protected price : PizzaEntityAttributes["price"];
    protected name : PizzaEntityAttributes["name"];
    protected state : PizzaEntityAttributes["state"];

    private constructor( pizza: Omit<PizzaEntityAttributes, "state"> ){
        this.id = pizza.id;
        this.ingredients = pizza.ingredients;
        this.name = pizza.name;
        this.price = pizza.price;
        this.state = PizzaEntityStateEnum.ORDERED;
    }

    public static createPizza( pizzaProps:Omit<PizzaEntityAttributes, "id"|"state"> ): 
    Result<PizzaEntity, PizzaDataAreNotValid>
    {        
        if ( !PizzaEntity.validate( pizzaProps ) ){
            return Result.err( new PizzaDataAreNotValid() );
        } else {
            const id = generateId();
            return Result.ok( new PizzaEntity( { id, ...pizzaProps } ) );
        }
    }

    public addIngredientToPizza( _ingredient:IngredientEntity ):void {
        //logic to add an ingredient to a pizza 
        // change the ingredient attribute AND the price attribute
        // Can't be done in all states
    }

    protected static validate( pizzaProps:Partial<PizzaEntityAttributes> ):boolean{
        //validation rules to respect domain invariants 
        return ( !!pizzaProps );
    }
}

