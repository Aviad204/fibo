const numY = document.getElementById("numY")
const inputNumber = document.getElementById("inputNumber")
const calculateFiboBtn = document.getElementById("calculateFiboBtn")
const errorDiv = document.getElementById("errorDiv")

const serverURL = "http://localhost:5050/fibonacci/"

async function getFiboFromServer() {

    try {
        const response = await fetch(serverURL + inputNumber.value)
        if (response.ok) {
            const data = await response.json()
            return data.result
        }
    } catch (err) {
        errorDiv.innerText = "We have an error " + err
    }
}

// fetch(url).then(res => res.json()).then(data => console.log(data))

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

async function handleClickBtn(event) {
    event.preventDefault()
    const calculatedNumber = await getFiboFromServer()
    numY.innerText = calculatedNumber
}


calculateFiboBtn.addEventListener("click", handleClickBtn)

