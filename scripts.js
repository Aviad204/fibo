const numY = document.getElementById("numY")
const inputNumber = document.getElementById("inputNumber")
const calculateFiboBtn = document.getElementById("calculateFiboBtn")
const errorDisplayer = document.getElementById("errorDisplayer")
const loadingSpinner = document.getElementById("loadingSpinner")

const serverURL = "http://localhost:5050/fibonacci/"

async function getFiboFromServer() {
    try {
        const response = await fetch(serverURL + inputNumber.value)
        if (response.ok) {
            const data = await response.json()
            return data.result
        }
    } catch (err) {
        errorDisplayer.innerText = "We have an error " + err
    }
}

function calculateFibo(x) {
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

function inputValidation() {
    if (inputNumber.value > 50 || inputNumber.value < 0) {
        return { isValid: false, message: "Input value must be 0-50" }
    } else if (isNaN(inputNumber.value)) {
        return { isValid: false, message: "The input must be a number" }
    } else {
        return { isValid: true, message: "Valid" }
    }
}

async function handleClickBtn(event) {
    event.preventDefault()
    resetState()
    const validation = inputValidation()
    if (validation.isValid) {
        enableSpinner()
        const calculatedNumber = await getFiboFromServer()
        numY.innerText = calculatedNumber
        disableSpinner()
    } else {
        displayError(validation.message)
        return
    }
}

function resetState() {
    errorDisplayer.innerHTML = ""
    errorDisplayer.classList.add("d-none")
    numY.innerHTML = ""
}

function displayError(errorMessage) {
    errorDisplayer.innerText = errorMessage
    errorDisplayer.classList.remove("d-none")
}

function enableSpinner() {
    loadingSpinner.classList.remove("d-none")
}
function disableSpinner() {
    loadingSpinner.classList.add("d-none")
}


calculateFiboBtn.addEventListener("click", handleClickBtn)

