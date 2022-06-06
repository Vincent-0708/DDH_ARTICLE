import { Address } from "../../client/domain/value-objects/address.value-object";
import { PizzaEntity } from "../domain/create_pizza/entities/pizza.entity";
import { SendPizzaCommandWithDeliveryGuyPort } 
    from "../domain/pizza_command/send-pizza-command-with-delivery-guy.port";
import { 
    paulEntersDeliveryAddressInHisGps, 
    paulMovesWithHisScooterToDeliveryAddress, 
    paulPutThePizzasIntoHisTopCase, 
    paulUnderstandsDeliveryAddress 
} from "./paul";

export class sendPizzaCommandWithPaul implements SendPizzaCommandWithDeliveryGuyPort{
    
    public async writeDownDeliveryAddress( deliveryAddress: Address ): Promise<boolean> {

        const doesPaulUnderstand = 
        await paulUnderstandsDeliveryAddress( deliveryAddress );

        if ( !doesPaulUnderstand ){
            return false;
        }
        await paulEntersDeliveryAddressInHisGps();
        return true;
    }

    public takePizzas( pizzas: PizzaEntity[] ): void {
        paulPutThePizzasIntoHisTopCase( pizzas );
    }

    public async moveFromPizzeriaToDeliveryAddress(): Promise<boolean> {
        await paulMovesWithHisScooterToDeliveryAddress();
        return true;
    }
}


