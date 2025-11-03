 export class Contact{
    public name:string;
    public phoneNumber:number;

    constructor(name:string, phoneNumber:number) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getPhoneNumber(): number {
        return this.phoneNumber;
    }

    setPhoneNumber(value: number) {
        this.phoneNumber = value;
    }

     displayContact():string{
        return `Name: ${this.getName()} PhoneNumber: ${this.getPhoneNumber()}`;
    }



}