export class PizzaDataAreNotValid extends Error{
    static readonly message = "Data are not valid";
    public readonly code = "PIZZA_DATA_INVALID";

    constructor(){
        super( PizzaDataAreNotValid.message );
    }
}

export class IngredientMissing extends Error{
    static readonly message = "One of the ingredient is missing ";
    public readonly code = "INGREDIENT_MISSING";

    constructor(){
        super( IngredientMissing.message );
    }
}