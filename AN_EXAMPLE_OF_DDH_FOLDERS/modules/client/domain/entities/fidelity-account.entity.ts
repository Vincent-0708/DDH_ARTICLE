import { FidelityPoint } from "../value-objects/fidelity-point.value-object";

export class FidelityAccountEntity{
    protected id:string;
    protected points:FidelityPoint;

    public getId():string{
        return this.id;
    }
}