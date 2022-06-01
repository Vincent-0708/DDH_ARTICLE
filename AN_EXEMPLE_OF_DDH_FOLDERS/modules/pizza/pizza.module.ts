import { Module } from "@nestjs/common";
import { ClientModule } from "../client/client.module";
import { SendPizzaCommandHandler } from "./domain/pizza_command/send-pizza-command.command-handler";
import { sendPizzaCommandWithJack } from "./infrastructure/sendPizzaCommandWithJack";
import {SendPizzaCommandWithDeliveryGuyPort} from "./domain/pizza_command/send-pizza-command-with-delivery-guy.port"

const CommandHandlers = [SendPizzaCommandHandler];

@Module({
  imports: [
    ClientModule,
  ],
  providers: [
    ...CommandHandlers,
    { provide: SendPizzaCommandWithDeliveryGuyPort, useClass: sendPizzaCommandWithJack },
  ],
})
export class PizzaModule {}
