export class CanNotSendMessage extends Error{
    static readonly message = "Can not send message";
    public readonly code = "CAN_NOT_SEND_MESSAGE"

    constructor(){
        super(CanNotSendMessage.message);
    }
}