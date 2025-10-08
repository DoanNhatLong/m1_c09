var view=document.getElementById("view")
var value
function input(value) {
    view.value += value
}

function calc() {
    var result = Function ("return " + view.value)();
        view.value = result;
        console.log(result);
}
