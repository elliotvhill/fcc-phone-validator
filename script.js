const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
// const numRegex = new RegExp("/(\d)?/g")
// const regex = /(?<=[\+\s1])([\s\-]?)(\(\d{3}\)|\d{3})([\s\-]?)(\d{3})([\s\-]?)(\d{4})/g

const simpleDigitsRegex = /([\+\s]?)(\b1)([\s\-]?)(\(\d{3}\)|\d{3})([\s\-]?)(\d{3})([\s\-]?)(\d{4})/g // closest so far


const checkInput = (e) => {
    if (!input.value) {
        alert("Please provide a phone number");
    // } else if (input.value.length >= 10 && input.value.length <= 16 && input.value.match(regex)) {
    } else if (input.value.length >= 10 && input.value.length <= 16 && input.value.match(simpleDigitsRegex)) {
        results.innerText = `Valid US number: ${input.value}`
        console.log("Valid number:", input.value)
    } else {
        results.innerText = `Invalid US number: ${input.value}`
        console.log(`Invalid US number: ${input.value}`)
    }
};

const clear = () => {
    input.value = ""
    results.textContent = ""
}

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clear);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
});
