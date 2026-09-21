function hasBothNumbers() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    if (first === "" || second === "") {
        let output = document.getElementById("output");
        output.innerHTML = "Must enter numbers";
        output.style.color = "white";
        return false;
    }
    return true;
}

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
    if (hasBothNumbers() === false) {
        return;
    }
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first + second;
    showResult(result);
}

function subtraction() {
    if (hasBothNumbers() === false) {
        return;
    }
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first - second;
    showResult(result);
}

function multiplication() {
    if (hasBothNumbers() === false) {
        return;
    }
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first * second;
    showResult(result);
}

function division() {
    if (hasBothNumbers() === false) {
        return;
    }
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = first / second;
    showResult(result);
}

function power() {
    if (hasBothNumbers() === false) {
        return;
    }
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);
    let result = 1;
    for (let i = 0; i < second; i = i + 1) {
        result = result * first;
    }
    showResult(result);
}

function clear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "white";
}
