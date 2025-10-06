
function calc(Maytinh) {
    let a= Number (document.getElementById("first").value);
    let b= Number (document.getElementById("second").value);
    let result;
    switch (Maytinh) {
        case'+': result = a+b ;
        break;
        case'-': result = a-b;
        break;

    }
    console.log(result);
    alert(result);
}
