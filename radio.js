

function calculate(i) {
    let selectValue = parseInt(document.querySelector('input[name="calculation"]:checked').value);
    FNX(selectValue);
}

function FNX(i) {
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);

    let result;
    let op;

    switch (i) {
        case 1:
            result = Number(value1) + Number(value2);
            op = "Addition";
            break;
        case 2:
            result = value1 - value2;
            op = "Subtraction";
            break;
        case 3:
            result = value1 * value2;
            op = "Multiplication";
            break;
        case 4:
            result = (value1 / value2).toFixed(3);
            op = "Division";
            break;
        default:
            result = "Error";
    }

    document.getElementById("answer").innerText = `${op} of ${value1} and ${value2} = ${result}`;

}