// Navbar
document.querySelector('body > nav > div > a').textContent = 'LABORATION #2';
document.getElementById('nav-home').style.fontWeight = 'bolder';
document.getElementById('nav-home').style.color = 'black';

// Welcome Form
let welcomeText = document.querySelector('#welcome');
let userName = localStorage.getItem('savedName');
if (userName) {
  welcomeText.innerHTML = 'Welcome ' + userName + ' !';
} else {
  welcomeText.innerHTML = 'Welcome!';
}
let welcomeBtn = document.querySelector('#welcomeBtn');
welcomeBtn.addEventListener('click', () => {
  let welcomeName = document.querySelector('#welcomeName').value;
  localStorage.setItem('savedName', welcomeName);
  welcomeText.innerHTML = 'Welcome ' + localStorage.getItem('savedName') + '!';
});

// Validated 2022-11-13 // KP
