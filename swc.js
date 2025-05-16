function calculate() {
    let a = parseFloat(document.getElementById("value1").value);
    let b = parseFloat(document.getElementById("value2").value);
    let op = parseInt(document.getElementById("operation").value);
    let result;
    let output;

    switch (op) {
        case 1:
            result = a + b;
            output = "Addition";
            break;

        case 2:
            result = a - b;
            output = "Subtraction";
            break;

        case 3:
            result = a * b;
            output = "Multiplication";
            break;

        case 4:
            result = (a / b).toFixed(3);
            output = "Division";
            break;

        default:
            result = "Invalid operator!";
    }

    document.getElementById("answer").innerText = `Result: ${result}`;
    document.getElementById("answer").innerText = `${output} of ${a} and ${b} = ${result}`;


}