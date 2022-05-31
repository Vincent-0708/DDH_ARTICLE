import { Address } from "../../../clients/domain/value-objects/address.value-object";
import { PizzaEntity } from "../create_pizza/entities/pizza.entity";


type DeliveryGuyMessages = {
    IKnowTheDeliveryAddress:boolean;
    IDeliveredTheCommand:boolean;
}

export interface SendPizzaCommandWithDeliveryGuyPort {

    writeDownDeliveryAddress(
    deliveryAddress: Address
    ) : Promise<DeliveryGuyMessages["IKnowTheDeliveryAddress"]>;

    takePizzas(pizzas:PizzaEntity[]):void

    moveFromPizzeriaToDeliveryAddress() : Promise<DeliveryGuyMessages["IDeliveredTheCommand"]>;

}



