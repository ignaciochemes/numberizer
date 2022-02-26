class ErrorException {
    type;
    message;

    constructor(type, message) {
        this.type = type ? type : "ErrorException";
        this.message = message ? message : "An error has occurred";
    }

}

module.exports = { ErrorException };