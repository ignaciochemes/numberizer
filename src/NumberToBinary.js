const { ErrorException } = require("./Middleware/ErrorMiddleware");

function NumberToBinary(number, replace = false) {

    if (number === null) throw new ErrorException("NumberToBinary", "number is null");
    if (typeof number !== "number") throw new ErrorException('NumberToBinary', 'amount must be a number');
    if (number < -1 * (2 ** 31)) throw new ErrorException('NumberToBinary', 'number must be equal or greater than -2147483648');
    if (number > 2 ** 31 - 1) throw new ErrorException('NumberToBinary', 'number must be equal or less than 2147483647');
    if (typeof replace != 'boolean') throw new ErrorException('NumberToBinary', 'replace must be a boolean');

    for (var i = 0, s = ""; i < 32;
        i++, s += String(number >>> 31), number <<= 1);
    if (replace) {
        return s = s.replace(/\B(?=(.{8})+(?!.))/g, " ");
    }
    return s;
}

module.exports = { NumberToBinary };