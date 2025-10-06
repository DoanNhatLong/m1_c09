// function test() {
//     document.write("Hello");
// }
// function avg() {
//
//     var a = parseFloat(prompt("Nhập a"));
//     var b = parseFloat(prompt("Nhập b"));
//     var c = parseFloat(prompt("Nhập c"));
//     var d= (a+b+c)/3;
//     document.write(d);
//
// }
function test() {
    var a = parseFloat(prompt("Nhập a"));

    if (a % 2 === 0) {
        console.log(`${a} is even`);
    } else {
        console.log(`${a} is odd`);
    }
}
function isBig() {
    var a = parseFloat(prompt("Nhập a"));
    var b = parseFloat(prompt("Nhập b"));
    var c = parseFloat(prompt("Nhập c"));
    if (a > b) {
        if (a > c) {
            console.log("Greatest number is a = " + a);
        } else {
            console.log("Greatest number is c = " + c);
        }
    } else {
        if (b > c) {
            console.log("Greatest number is b = " + b);
        } else {
            console.log("Greatest number is c = " + c);
        }
    }
}
