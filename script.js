const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("button");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", () => {
  console.log(add(parseInt(input1.value), parseInt(input2.value)));
});
