const numX = document.getElementById("numX")
const numY = document.getElementById("numY")

numX.innerText = 10

function calculateFibo(x) {
    console.log(x)

    const numberToCalculate = parseInt(x)
    if (numberToCalculate === 0) return 0
    if (numberToCalculate === 1) return 1
    let previous1 = 0;
    let previous2 = 1;
    let result;

    for (let i = 2; i <= numberToCalculate; i++) {
        result = previous1 + previous2
        previous1 = previous2;
        previous2 = result
    }


    return result
}


numY.innerText = calculateFibo(numX.innerText)
