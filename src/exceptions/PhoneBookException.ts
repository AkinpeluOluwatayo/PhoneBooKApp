class PhoneBookException extends Error{
    constructor(message:string) {
        super(message);
        this.name = "PhoneBookException";
    }
}