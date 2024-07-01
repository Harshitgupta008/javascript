const result = document.querySelector("#result");
const add = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");


function addvalue(num) {
    result.value += num;
}

clear.addEventListener('click', () => {
    result.value = "";
})
add.addEventListener('click', () => {
    const answer = eval(result.value);
    result.value = answer;
})
back.addEventListener('click', () => {
    
    result.value = result.value.slice(0, -1);;
})


