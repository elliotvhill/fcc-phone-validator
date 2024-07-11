const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
// const numRegex = new RegExp("/(\d)?/g")
const regex = /(\+)?(\s)?([1\s])?([\s\(\-\s)])?(\d{3})([\)\-\s)][\s])?(\d{4})/g


const testRegEx = /\+?1*[\s\-]?\(?\d{3}\)\4?[\s\-]?\d{3}[\s\-]?\d{4}/g // closest so far
const areaCodes = /(\(\d{3}\))/g // correctly matches "(" and ")" -- both needed

const regexExclude = /[^\&\$\%\@.]/g
const testBadNum = "1$389%012340"


const checkInput = (e) => {
    if (!input.value) {
        alert("Please provide a phone number");
    } else if (input.value.length < 10 || input.value.length > 16 || !input.value.match(testRegEx)) {
        results.innerText = `Invalid US number: ${input.value}`
        console.log("invalid number:", input.value)
    } else {
        results.innerText = `Valid US number: ${input.value}`
        console.log(`${input.value} is a valid US phone number`)
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
