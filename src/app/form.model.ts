export class Form {
    name: string = "";
    email: string = "";
    message: string = "";
    result: string = "";

    constructor (name: string, email: string, message: string, result: string) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.result = result;
    }
}
