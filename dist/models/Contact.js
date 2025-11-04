"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(value) {
        this.phoneNumber = value;
    }
    displayContact() {
        return `Name: ${this.getName()} PhoneNumber: ${this.getPhoneNumber()}`;
    }
}
exports.Contact = Contact;
