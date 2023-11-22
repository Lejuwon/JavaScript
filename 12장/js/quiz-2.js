const btn = document.querySelector("button");
const result = document.querySelector("#result");
let inputNum = document.querySelector("#user-number");

btn.addEventListener("click", () => {
    try {
        if (parseInt(inputNum.value) < 10) {
            result.innerText = inputNum.value;
        }
        else if (parseInt(inputNum.value) >= 10) {
            throw "10보다 작은 수를 입력하세요.";
        } 
        else if (inputNum.value === "" || isNaN(inputNum.value)) {
            throw "숫자를 입력하세요.";
        }
    } catch (err) {
        alert(err);
    } finally {
        inputNum.value = "";
    }
});

