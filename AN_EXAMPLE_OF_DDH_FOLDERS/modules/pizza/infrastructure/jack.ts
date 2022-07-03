import { Address } from "../../client/domain/value-objects/address.value-object";
import { PizzaEntity } from "../domain/create_pizza/entities/pizza.entity";

export const jackUnderstandsDeliveryAddress = 
async ( _deliveryAddress: Address ) : Promise<boolean> => {
    //No business logic here only CRUD operations or call to APIs 
    return ( true );
};


export const jackWritesDeliveryAddressOnHisPhone = async () : Promise<void> => {
    //No business logic here only CRUD operations or call to APIs 
};

export const jakePutThePizzasIntoHisBag = ( _pizzas: PizzaEntity[] ) : void=>{
    //No business logic here only CRUD operations or call to APIs 
};

export const jackMovesWithHisBikeToDeliveryAddress = async () : Promise<void> => {
    //No business logic here only CRUD operations or call to APIs 
};