//
// var a =parseFloat(prompt("Nhập a"));
// var b =parseFloat(prompt("Nhập b"));
// a%b===0
//     ?console.log("a chia hết cho b") : console.log("a không chia hết cho b")
//
// var a = parseFloat(prompt("Nhâp a"))
// a>16
//     ?console.log("Đã lớn tuôi") : console.log("còn bé")
//
//
// var a = parseFloat(prompt("Nhap a"))
// var n=1
// function cong(a){
//     a!==1?n=a+cong(a-1):1
//     return n;
// }
// alert(cong(a))
//
// a= prompt("Nhap a")*1;
// b= prompt("Nhap b")*1;
// function solveMeFirst(a,b){
//     return a+b;
// }
// document.write(solveMeFirst(a,b))
//
//
// function count(a) {
//     a===100?console.log(100):
//         a===99?
//             (console.log("hoan thanh"),count(a+1)):
//             (count(a+1),
//             console.log(a));
// }
// count(1)
//
//
// function fibonaci(a,b,i=1) {
//     i<20? (i++,fibonaci(b,a+b,i), console.log(a))
//         : console.log(a)
// }
// fibonaci(1,1)
//
//
// function calc(a=1,i=0, sum=0) {
//     i<20?a%7===0? (i++,sum+=a,calc(a+1,i,sum))
//                 :(a++,calc(a,i,sum))
//         : console.log(sum)
// }
// calc(1,0,0)
//
//
// function fizzBuzz(i=1) {
//     i<100?
//         i%3==0 && i%5==0
//             ? (console.log("fizzBuzz"), fizzBuzz(i+1)):
//             i%3==0
//                 ? (console.log("fizz"), fizzBuzz(i+1)):
//                 i%5==0
//                     ? (console.log("Buzz"), fizzBuzz(i+1))
//                     : (console.log(i), fizzBuzz(i+1))
//         : console.log(i)
// }
// fizzBuzz(1)
//
//  function factorial(i=1,a,total=1) {
//     i<=a
//          ?(total*=i,factorial(i+1,a,total))
//          :console.log(total)
//  }
//  var a=prompt("Nhập a")*1
//  factorial(1,a)


// function tree(a=5,i=1) {
//     i<=a
//         ?(console.log("*".repeat(i)),tree(a,i+1))
//         :null
// }
// tree(5,1)

// function tree1(a=5,i=1) {
//     i<=a
//         ?(console.log(" ".repeat(a-i) + "*".repeat(i)),tree1(a,i+1))
//         :null
// }
// tree1(5,1)


// function table(table, r=1, c=1) {
//     let table="<table border="1">";
//     r<=10
//         ?table+="<tr>"

// }

function createcol(row,col=1) {
    return col>10
        ? ""
        : "<td>" +"1"+ "</td>" + createcol(row, col+1)
}


function createRow(row = 1) {
    return row > 10
        ? ""
        : "<tr>" + createcol(row,1)+ "</tr>" + createRow(row + 1);
}
function table() {
    return "<table>"+createRow()+"</table>"

}
// console.log(table());
document.write(table())

