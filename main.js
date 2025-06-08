
const form = document.querySelector('.form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  console.log('Імʼя:', nameValue);
  console.log('Email:', emailValue);

  form.reset();

  form.querySelector('button').textContent = nameValue;
});
