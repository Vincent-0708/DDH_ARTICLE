import { Address } from "../../client/domain/value-objects/address.value-object";
import { PizzaEntity } from "../domain/create_pizza/entities/pizza.entity";
import { SendPizzaCommandWithDeliveryGuyPort } from "../domain/pizza_command/send-pizza-command-with-delivery-guy.port";
import { 
    jackMovesWithHisBikeToDeliveryAddress, 
    jackUnderstandsDeliveryAddress, 
    jackWritesDeliveryAddressOnHisPhone, 
    jakePutThePizzasIntoHisBag} from "./jack";

export class sendPizzaCommandWithJack implements SendPizzaCommandWithDeliveryGuyPort{
    
    public async writeDownDeliveryAddress(deliveryAddress: Address): Promise<boolean> {
        const doesJackUnderstand = await jackUnderstandsDeliveryAddress(deliveryAddress);
        if( !doesJackUnderstand ){
            return false
        }
        await jackWritesDeliveryAddressOnHisPhone();
        return true
    }

    public takePizzas(pizzas: PizzaEntity[]): void {
        jakePutThePizzasIntoHisBag(pizzas);
    }

    public async moveFromPizzeriaToDeliveryAddress(): Promise<boolean> {
        await jackMovesWithHisBikeToDeliveryAddress();
        return true 
    }
}


