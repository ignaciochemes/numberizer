const { ErrorException } = require("./Middleware/ErrorMiddleware");

function GenericRandom(amount) {

    if (amount === null) throw new ErrorException("GenericRandom", "amount is null");
    if (!amount) amount = 6;
    if (typeof amount !== "number") throw new ErrorException('GenericRandom', 'amount must be a number');
    if (amount < 1) throw new ErrorException('GenericRandom', 'amount must be greater than 1');
    if (amount > 18) throw new ErrorException('GenericRandom', 'amount must be less than 18');

    const min = "0";
    const max = "9";

    let result = Math.floor(
        Math.random() * (Number(max.repeat(amount)) - Number(min.repeat(amount)) + 1)
    ) + Number(min.repeat(amount));

    return result;
}

module.exports = { GenericRandom };