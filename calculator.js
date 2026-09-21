function showResult(result) {
    let output = document.getElementById("output");
    output.innerHTML = String(result);
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "white";
    }
}

function addition() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    showResult(first + second);
}

function subtraction() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    showResult(first - second);
}

function multiplication() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    showResult(first * second);
}

function division() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    showResult(first / second);
}

function power() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = 1;
    let i;
    for (i = 0; i < second; i++) {
        result = result * first;
    }
    showResult(result);
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
