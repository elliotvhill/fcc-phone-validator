const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");

const checkInput = (e) => {
    if (!input.value) {
        alert("Please provide a phone number");
    }
};

checkBtn.addEventListener("click", checkInput);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
});
