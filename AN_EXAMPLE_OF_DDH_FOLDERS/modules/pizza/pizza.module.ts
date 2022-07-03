import { Module } from "@nestjs/common";
import { ClientModule } from "../client/client.module";
import { SendPizzaCommandHandler } 
    from "./domain/pizza_command/send-pizza-command.command-handler";
import { sendPizzaCommandWithJack } from "./infrastructure/send-pizza-command-with-jack.adapter";
import { SendPizzaCommandWithDeliveryGuyPort } 
    from "./domain/pizza_command/send-pizza-command-with-delivery-guy.port";

const CommandHandlers = [ SendPizzaCommandHandler ];

@Module( {
    imports: [ ClientModule, ],
    providers: [
        ...CommandHandlers,
        { provide: SendPizzaCommandWithDeliveryGuyPort, useClass: sendPizzaCommandWithJack }, // We decided to use Jack to deliver the pizzas
    ],
} )
export class PizzaModule {}
