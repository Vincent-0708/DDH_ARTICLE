import { IngredientEntity } from "../domain/create_pizza/entities/ingredient.entity";

export class PizzaCommandDataAreNotValid extends Error{
    static readonly message = "Data are not valid";
    public readonly code = "PIZZA_COMMAND_DATA_INVALID";

    constructor(){
        super( PizzaCommandDataAreNotValid.message );
    }
}

export class IngredientMissingForPizza extends Error{
    static readonly message = "{ingredient} are missing";
    public readonly code = "PIZZA_COMMAND_DATA_INVALID";

    constructor( ingredient:IngredientEntity ){
        const messageWithIngredientName = 
        PizzaCommandDataAreNotValid.message.replace( "{ingredient}", ingredient.getName() );
        
        super( messageWithIngredientName );
    }
}