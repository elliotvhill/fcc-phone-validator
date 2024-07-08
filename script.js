const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const numRegex = new RegExp("/(\d)?/g")
// const regex = /([+\s]?)?([1\s-\()]?)(\d)*?([-\s)])(\d)/g
const testNum = "+ 1(203) 123-4567";
const testNum2 = "+1-2031234567";
const testNum3 = "1 555-555-5555"
const testNum4 = "555-5555"
// console.log(testNum.match(regex))

const testRegEx = /([+\s]?)(1?)([\(-\s\d]{3})/g

console.log(testNum, testNum.match(testRegEx))
console.log(testNum, testNum.replace("+", ""))
console.log(testNum2, testNum2.match(testRegEx))
console.log(testNum3, testNum3.match(testRegEx))
console.log(testNum4, testNum4.match(testRegEx))

// +
// " "
// 1
// " " | "-" | "(" | ""
// 2
// 2
// 2
// " " | "-" | ")" | ""
// 4
// 5
// 8
// 9


const checkInput = (e) => {
    if (!input.value) {
        alert("Please provide a phone number");
    }
};

const clear = () => {
    results.textContent = ""
}

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clear);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
});
