export class IngredientDataAreNotValid extends Error{
    static readonly message = "Data are not valid";
    public readonly code = "INGREDIENT_DATA_INVALID";

    constructor(){
        super( IngredientDataAreNotValid.message );
    }
}
