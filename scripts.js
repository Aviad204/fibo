const numY = document.getElementById("numY")
const inputNumber = document.getElementById("inputNumber")
const calculateFiboBtn = document.getElementById("calculateFiboBtn")
const errorDisplayer = document.getElementById("errorDisplayer")
const loadingSpinner = document.getElementById("loadingSpinner")

const serverURL = "http://localhost:5050/fibonacci/"



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

async function getFiboFromServer() {
    try {
        const response = await fetch(serverURL + inputNumber.value)
        if (response.ok) {
            const data = await response.json()
            return data.result
        } else {
            numY.classList.add("text-danger")
            const errorMessage = `Server Error: ${await response.text()}`
            console.log(errorMessage)
            numY.innerText = errorMessage;
            return null
        }
    } catch (err) {
        errorDisplayer.innerText = "We have an error " + err
    }
}

async function handleClickBtn(event) {
    event.preventDefault()
    resetState()
    const validation = inputValidation()
    if (validation.isValid) {
        enableSpinner()
        const calculatedNumber = await getFiboFromServer()
        // a number // null
        if (calculatedNumber) numY.innerText = calculatedNumber
        disableSpinner()
    } else {
        displayError(validation.message)
    }
}

function resetState() {
    errorDisplayer.innerHTML = ""
    errorDisplayer.classList.add("d-none")
    numY.innerHTML = ""
    numY.classList.remove("text-danger")

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










const condition = ""

if (condition) {
    console.log("true")
} else {
    console.log("false")
}



// True
// Strings, numbers. array(also empty), objects(also empty)

// False
// null, undefined, empty string