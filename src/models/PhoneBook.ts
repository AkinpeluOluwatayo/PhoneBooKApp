import {Contact} from "./Contact";

class PhoneBook extends Contact{
    private contact:Contact[];

    constructor() {
        super(name, phoneNumber);
        this.contact = []
    }

    addContact(name:string, phoneNumber:number):string{
        if(!/^[A-Za-z]+$/.test(name)){
            throw new Error ("Conatact name should be in alphabets");
        }
        const phoneToString = phoneNumber.toString();
        if(!/^[0-9]{11}$/.test(phoneToString)){             // i am validating nd making sure its doesnt pass 11 number
            throw new Error ("Phone number should be in digits and 11 numbers");
        }

        this.contact.push(new Contact(name, phoneNumber))  // i am creating new instance passing d prameter nd pushing
                                                            // it in the contact array thats why i imported contact
        return "Tayo you have  successfully added a contact ";

    }

    removeContact(name:string, phoneNumber:number):Contact[]{
        this.contact = this.contact.filter(c => !(c.name === name && c.phoneNumber)); //

    }


}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

