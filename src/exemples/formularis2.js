const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const birthdate = document.getElementById('birthdate').value;
const dni = document.getElementById('dni').value;
const password = document.getElementById('password').value;


const emailRegex = /^[^\s@]+@cirvianum.cat^/;

const today = new Date();
const birthdateDate = new Date(birthdate);
const age = (today - birthdateDate) / (365,25 * 24 * 3600 * 1000);

if (age < 18) {
  alert('No pots registrar-te si no tens 18 anys')
  return;
}

const dniRegex = /^[a-zA-Z0-9]?[0-9]{8}[a-zA-Z0-9]?$/;
if(!dniRegex.test(dni)) {
  alert('El DNI no és vàlid');
  return;
}