"use strict";
class PhoneBookException extends Error {
    constructor(message) {
        super(message);
        this.name = "PhoneBookException";
    }
}
