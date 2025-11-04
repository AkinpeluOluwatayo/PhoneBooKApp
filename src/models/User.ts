

import { Contact } from "./Contact";
import { PhoneBookInterface } from "./PhoneBookInterface";

export class User  implements PhoneBookInterface {
    private name: string;
    private password: string;
    private contacts: Contact[];  // store user’s contact list

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
        this.contacts = [];
    }

   addContact(name: string, phoneNumber: number): string {
        const newContact = new Contact(name, phoneNumber);
        this.contacts.push(newContact);
        return (`You have added ${name} contact successfully`);
    }

    removeContact(name: string, phoneNumber: number): Contact[] {
        this.contacts = this.contacts.filter(
            c => !(c.name === name && c.phoneNumber === phoneNumber)
        );
        return this.contacts;
    }

    showAllContact():Contact[]{
        return this.contacts;
    }
}
const user = new User("Tayo", "1234");
console.log (user.addContact("Tosin",81053861932));
console.log(user.addContact("Segun", 70638952743));
console.log(user.addContact("Femi", 90511709597));
console.log(user.showAllContact());



