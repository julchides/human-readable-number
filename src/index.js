module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numArr = number
        .toString()
        .split("")
        .map((x) => +x);

    let numRes;

    if (numArr.length === 1) {
        numRes = `${digits[numArr[0]]}`;
    } else if (numArr.length === 2 && numArr[0] > 1 && numArr[1] !== 0) {
        numRes = `${tens[numArr[0]]} ${digits[numArr[1]]}`;
    } else if (numArr.length === 2 && numArr[0] > 1 && numArr[1] === 0) {
        numRes = `${tens[numArr[0]]}`;
    } else if (numArr.length === 2 && numArr[0] === 1) {
        numRes = `${teens[numArr[1]]}`;
    } else if (numArr.length === 3 && numArr[1] > 1 && numArr[2] !== 0) {
        numRes = `${digits[numArr[0]]} hundred ${tens[numArr[1]]} ${
            digits[numArr[2]]
        }`;
    } else if (numArr.length === 3 && numArr[1] > 1 && numArr[2] === 0) {
        numRes = `${digits[numArr[0]]} hundred ${tens[numArr[1]]}`;
    } else if (numArr.length === 3 && numArr[1] === 1) {
        numRes = `${digits[numArr[0]]} hundred ${teens[numArr[2]]}`;
    } else if (numArr.length === 3 && numArr[1] === 0 && numArr[2] !== 0) {
        numRes = `${digits[numArr[0]]} hundred ${digits[numArr[2]]}`;
    } else if (numArr.length === 3 && numArr[1] === 0 && numArr[2] === 0) {
        numRes = `${digits[numArr[0]]} hundred`;
    }

    return numRes;
};
