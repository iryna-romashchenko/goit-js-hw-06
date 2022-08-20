const inputEl = document.querySelector('#font-size-control');
let spanEl = document.querySelector('#text');

const editValue = (event) => {
    event.preventDefault();
  spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('input', editValue);

