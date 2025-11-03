

import { Contact } from "./Contact";
import { PhoneBookInterface } from "./PhoneBookInterface";

class User  implements PhoneBookInterface {
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
        return "Contact added successfully!";
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
console.log (user.addContact("Tosin",123456789));
console.log(user.addContact("Segun", 12345678));
console.log(user.showAllContact());
console.log(user.removeContact("Tosin",123456789 ));

