import { Injectable } from "@nestjs/common";
import Result from "../../../../../libs/result/result";
import { generateId } from "../../../../../libs/utils/generate-random-string-id";
import { IngredientDataAreNotValid } from "../../../errors/ingredient.error";

export type IngredientEntityAttributes = {
    id: string
    name: string;
}

@Injectable()
export class IngredientEntity {
    protected id: IngredientEntityAttributes["id"];
    protected name : IngredientEntityAttributes["name"];

    private constructor(ingredient: IngredientEntityAttributes){
        this.id = ingredient.id;
        this.name = ingredient.name;
    }

    public static createIngredient(ingredientProps:Omit<IngredientEntityAttributes,"id">):
    Result<IngredientEntity,IngredientDataAreNotValid>
    {        
        if (!IngredientEntity.validate(ingredientProps)){
            return Result.err(new IngredientDataAreNotValid());
        } else {
            const id = generateId()
            return Result.ok(new IngredientEntity({id,...ingredientProps}));
        }
    }

    protected static validate(ingredientProps:Partial<IngredientEntityAttributes>):boolean{
        //validation rules to respect domain invariants 
        return(!!ingredientProps);
    }

    public getName():IngredientEntityAttributes["name"]{
        return this.name.toString();
    }
}
