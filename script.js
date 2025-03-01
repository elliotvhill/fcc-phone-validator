const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const regex =
    /^(\+?\b1)?([\s\-])?(\(\d{3}\)|\d{3})([\s\-]?)(\d{3})([\s\-])?(\d{4}$)/g;

const checkInput = () => {
    if (!input.value) {
        alert("Please provide a phone number");
    } else if (
        input.value.length >= 10 &&
        input.value.length <= 18 &&
        input.value.match(regex)
    ) {
        results.innerText = `Valid US number: ${input.value}`;
    } else {
        results.innerText = `Invalid US number: ${input.value}`;
    }
};

const clear = () => {
    input.value = "";
    results.textContent = "";
};

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clear);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
});
