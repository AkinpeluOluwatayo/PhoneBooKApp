"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Contact_1 = require("./Contact");
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.contacts = [];
    }
    addContact(name, phoneNumber) {
        const newContact = new Contact_1.Contact(name, phoneNumber);
        this.contacts.push(newContact);
        return (`You have added ${name} contact successfully`);
    }
    removeContact(name, phoneNumber) {
        this.contacts = this.contacts.filter(c => !(c.name === name && c.phoneNumber === phoneNumber));
        return this.contacts;
    }
    showAllContact() {
        return this.contacts;
    }
}
exports.User = User;
const user = new User("Tayo", "1234");
console.log(user.addContact("Tosin", 81053861932));
console.log(user.addContact("Segun", 70638952743));
console.log(user.addContact("Femi", 90511709597));
console.log(user.showAllContact());
