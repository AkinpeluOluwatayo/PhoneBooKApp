import {Contact} from "../models/Contact";

export interface PhoneBookInterface {
    addContact(name:string, phoneNumber:number):string;
    removeContact(name:string, phoneNumber:number):Contact[];
}