import { ICommand } from "@nestjs/cqrs";
import Result from "../../../libs/result/result";
import { CanNotSendMessage } from "./errors/sent-message.error";


type SendMessageToClientCommandPayload = { clientPhoneNumber: string, message:string};

export type SendMessageToClientCommandResult = Result<void, CanNotSendMessage>;

export class SendMessageToClientCommand implements ICommand {
    constructor( public readonly payload: SendMessageToClientCommandPayload ) {}
}
