// Navbar
document.querySelector("body > nav > div > a").textContent = ('LABORATION #2');
document.getElementById('navHome').style.fontWeight = 'bolder';
document.getElementById('navHome').style.color = 'black';

// Welcome Form
document.querySelector('#welcome').innerHTML = ('Welcome ' + localStorage.getItem('savedName') + ' !');
let welcomeBtn = document.querySelector('#welcomeBtn');
welcomeBtn.addEventListener('click', ()=> {
    let welcomeName = document.querySelector('#welcomeName').value;
    localStorage.setItem('savedName', welcomeName);
    document.querySelector('#welcome').innerHTML = ('Welcome ' + localStorage.getItem('savedName') + '!');
});

// Validated 2022-11-13 // KP
