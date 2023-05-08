var InputNum1 = document.querySelector("#input1");
var InputNum2 = document.querySelector("#input2");
var submitButton = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function () {
    console.log(add(+InputNum1.value, +InputNum2.value));
});
