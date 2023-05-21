const numY = document.getElementById("numY")
const inputNumber = document.getElementById("inputNumber")
const calculateFiboBtn = document.getElementById("calculateFiboBtn")

function calculateFibo(x) {
    console.log("i am running")
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


calculateFiboBtn.addEventListener("click", () => {
    numY.innerText = calculateFibo(inputNumber.value)
})

