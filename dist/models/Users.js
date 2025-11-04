"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const user = new User_1.User("Tayo", "1234");
function addContact() {
    const name = prompt("Enter contact name:");
    const phone = prompt("Enter phone number:");
    if (name && phone) {
        const phoneNumber = Number(phone);
        alert(user.addContact(name, phoneNumber));
    }
    else {
        alert("Please fill in both fields.");
    }
}
function showContacts() {
    const contacts = user.showAllContact();
    if (contacts.length === 0) {
        alert("No contacts available.");
    }
    else {
        const list = contacts.map(c => `${c.name}: ${c.phoneNumber}`).join("\n");
        alert("Your contacts:\n" + list);
    }
}
// call functions to test
addContact();
showContacts();
