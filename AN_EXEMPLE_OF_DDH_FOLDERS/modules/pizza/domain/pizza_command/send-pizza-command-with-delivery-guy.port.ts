import { Address } from "../../../client/domain/value-objects/address.value-object";
import { PizzaEntity } from "../create_pizza/entities/pizza.entity";


type DeliveryGuyMessages = {
    IKnowTheDeliveryAddress:boolean;
    IDeliveredTheCommand:boolean;
}

export abstract class SendPizzaCommandWithDeliveryGuyPort {

    abstract writeDownDeliveryAddress(
    deliveryAddress: Address
    ) : Promise<DeliveryGuyMessages["IKnowTheDeliveryAddress"]>;

    abstract takePizzas( pizzas:PizzaEntity[] ):void

    abstract moveFromPizzeriaToDeliveryAddress() 
    : Promise<DeliveryGuyMessages["IDeliveredTheCommand"]>;

}


