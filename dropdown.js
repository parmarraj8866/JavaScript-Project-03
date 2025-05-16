
function calculate() {
    const selectValue = parseInt(document.getElementById("operation").value);
    FNX(selectValue);
}

function FNX(i) {

    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);

    let result;
    let output;

    switch (i) {
        case 1:
            result = Number(value1) + Number(value2);
            output = "Addition";
            break;

        case 2:
            result = value1 - value2;
            output = "Subtraction";
            break;

        case 3:
            result = value1 * value2;
            output = "Multiplication";
            break;

        case 4:
            result = (value1 / value2).toFixed(3);
            output = "Division"
            break;

        default:
            console.log("False");
    }
    document.getElementById("answer").innerText = `${output} of ${value1} and ${value2} = ${result}`;
}
