const submitLoginButton = document.querySelector('#login-submit');
const submitFormButton = document.querySelector('#submit-btn');
const emailId = document.querySelector('#email');
const password = document.querySelector('#input-password');
const agreement = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counterText = document.querySelector('#counter');

submitLoginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (emailId.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submitFormButton.removeAttribute('disabled');
    submitFormButton.style.backgroundColor = '#4E2C83';
  } else {
    submitFormButton.setAttribute('disabled', '');
    submitFormButton.style.backgroundColor = 'lightgrey';
  }
});

textarea.addEventListener('input', () => {
  let counter = 500;
  counter -= (textarea.value.length);
  counterText.innerText = counter;
});

const formData = document.querySelector('#form-data');
const nomeData = document.querySelector('#input-name');
const sobreNomeData = document.querySelector('#input-lastname');
const emailData = document.querySelector('#input-email');
const casaData = document.getElementById('house');
const familiaData = document.querySelectorAll('[name="family"]');
const materiasData = document.querySelectorAll('[name="subject"]');
const avaliacaoData = document.querySelectorAll('[name="rate"]');
const mainForm = document.querySelector('#main-form');

let casa = casaData.value;
let familia = null;
let avaliacao = null;

const createFamilia = () => {
  for (let i = 0; i < familiaData.length; i += 1) {
    if (familiaData[i].checked) {
      familia = familiaData[i].value;
    }
  }
};

const createMaterias = (materias) => {
  for (let i = 0; i < materiasData.length; i += 1) {
    if (materiasData[i].checked) {
      materias.push(materiasData[i].value);
    }
  }
};

const createAvaliacao = () => {
  for (let i = 0; i < avaliacaoData.length; i += 1) {
    if (avaliacaoData[i].checked) {
      avaliacao = avaliacaoData[i].value;
    }
  }
};

casaData.addEventListener('change', () => {
  casa = casaData.value;
});

const createAll = (materias) => {
  createFamilia();
  createMaterias(materias);
  createAvaliacao();
};

const sendToForm = () => {
  const nome = nomeData.value;
  const sobreNome = sobreNomeData.value;
  const email = emailData.value;
  let materias = [];
  const observacao = textarea.value;
  createAll(materias);
  materias = materias.join(', ');
  formData.innerHTML = `
  <p>Nome: ${nome} ${sobreNome}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${casa}</p>
  <p>Família: ${familia}</p>
  <p>Matérias: ${materias}</p>
  <p>Avaliação: ${avaliacao}</p>
  <div class="teste">
    <p>Observações: ${observacao}</p>
  </div>
  `;
};

submitFormButton.addEventListener('click', (event) => {
  event.preventDefault();
  mainForm.style.display = 'none';
  formData.style.display = 'flex';
  sendToForm();
});
