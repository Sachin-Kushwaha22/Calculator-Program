const display = document.getElementById("display");

function input(val) {
    if (display.value === "error") {
        display.value = "";
    }
    display.value += val;
}

function clearVal() {
    display.value = "";
}

function calculate() {
    try { display.value = eval(display.value); }
    catch (err) {
        display.value = "error";
    }
}