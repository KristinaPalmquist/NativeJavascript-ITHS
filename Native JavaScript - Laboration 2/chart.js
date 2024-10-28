// Navbar
document.querySelector('body > nav > div > a').textContent = 'LABORATION #2';
document.getElementById('nav-chart').style.fontWeight = 'bolder';
document.getElementById('nav-chart').style.color = 'black';

// Welcome

let welcomeText = document.querySelector('#welcome');
let userName = localStorage.getItem('savedName');
if (userName) {
  welcomeText.innerHTML = 'Welcome ' + userName + ' !';
} else {
  welcomeText.innerHTML = 'Welcome!';
}

// Chart
const labels = [
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
];

const data = {
  labels: labels,
  datasets: [
    {
      label:
        'Percentage of graduates that were satisfied with their yrkeshögskola education',
      backgroundColor: '#502274',
      borderColor: '#502274',
      data: [90, 87, 79, 84, 85, 91, 89, 84, 85, 83, 88],
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    color: '#000',
    scales: {
      yAxis: {
        min: 0,
        max: 100,
      },
    },
  },
};

const myChart = new Chart(document.getElementById('myChart'), config);

let source = document.getElementById('sourceReference');
source.innerHTML += `<a href='https://www.myh.se/statistik/statistik-yrkeshogskoleutbildningar/nojdhet-med-utbildningen' style="text-decoration: none; color: black">Myndigheten för yrkeshögskolan</a>`;

// Validated 2022-11-15 // KP
