const submitButton = document.querySelector('#submit');
const email = document.querySelector('#email');
const password = document.querySelector('#input-password');
console.log(submitButton);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
