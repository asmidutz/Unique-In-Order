function getSum(a, b) {
    if (b == 0) {
        return a;
    } else {
        return getSum(a ^ b, (a & b) << 1)
    }
};

var test = getSum(2,3)
console.log(test)