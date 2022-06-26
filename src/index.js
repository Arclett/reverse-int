module.exports = function reverse (n) {
    const h = Math.abs(n);
    let revNum = h.toString().charAt((h.toString().length))
    for (i = 0; i < h.toString().length+1; i++) {
        revNum = revNum + h.toString().charAt((h.toString().length-i))
    }
    return Number(revNum);
}
