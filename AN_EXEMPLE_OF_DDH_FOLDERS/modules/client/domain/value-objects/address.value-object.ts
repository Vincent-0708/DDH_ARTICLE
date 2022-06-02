export class Address {
    public postalCode:string;
    public street:string;
    public streetNumber:string;

    constructor(postalCode:string, street:string, streetNumber:string){
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber; 
    }
}