const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const value = document.getElementById('count');

increment.addEventListener('click', () => {
    value.innerText = Number(value.innerText) + 1;
})

decrement.addEventListener('click', () => {
    value.innerText = Number(value.innerText) - 1;
})

reset.addEventListener('click', () => {
    value.innerText = 0;
})
