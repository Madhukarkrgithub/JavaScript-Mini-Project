const title = document.querySelector("#title");
var value = 0;

const decrement = document.querySelector("#dec");
const reset = document.querySelector("#reset");
const increment = document.querySelector("#inc");

decrement.addEventListener("click",() =>{
    value--;
    title.textContent = value;
});

reset.addEventListener("click",() =>{
    value = 0;
    title.textContent = value;
});
increment.addEventListener("click",() =>{
    value++;
    title.textContent = value;
});