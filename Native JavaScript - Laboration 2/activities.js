// Navbar
document.querySelector("body > nav > div > a").textContent = ('LABORATION #2');
document.getElementById('navActivities').style.fontWeight = 'bolder';
document.getElementById('navActivities').style.color = 'black';

// Welcome Form
document.querySelector('#welcome').innerHTML = ('Welcome ' + localStorage.getItem('savedName') + '!');

// Create image array
let imageSrcArray = [
    "images/activity_cards/animal-g2c1cc6c5d_1280.png",
    "images/activity_cards/bicycle-g27230b8da_1920.png",
    "images/activity_cards/bird-g9c4518ab3_1280.png",
    "images/activity_cards/brain-gd7e6d92e3_1920.png",
    "images/activity_cards/cartoon-gf17839d2e_1920.jpg",
    "images/activity_cards/cat-g1eee721d9_1920.jpg",
    "images/activity_cards/cloud-g73ad2792c_1920.jpg",
    "images/activity_cards/girl-gdb7316264_1920.jpg",
    "images/activity_cards/luggage-g5a1cd6bfe_1920.jpg",
    "images/activity_cards/music-g9b2e9d08a_1280.png",
    "images/activity_cards/rabbit-gfecabd579_1280.png",
    "images/activity_cards/rainbow-g3b4853b53_1920.png",
    "images/activity_cards/sheep-gefd72f0de_1920.jpg",
    "images/activity_cards/sloth-gdf2252f0c_1920.png",
    "images/activity_cards/cat-g2f9233b09_1920.jpg",
    "images/activity_cards/fox-g8cba29c22_1920.jpg",
    "images/activity_cards/cat-g49a1182d6_1920.png",
    "images/activity_cards/job-gbff5c5524_1920.png",
    "images/activity_cards/space-g74165b711_1920.jpg"
];
// shuffle image array
imageSrcArray.sort(function() { return 0.5 - Math.random(); });

// Create location array
fetch('https://avancera.app/cities/')
    .then(response => response.json())
    .then(location => {
        let locationNames = [];
        location.forEach(location => {
            locationNames.push(location.name);
        });
        locationNames.sort(function() { return 0.5 - Math.random(); });
        sessionStorage.setItem('locations', JSON.stringify(locationNames));
    });

// Activity
const activityCards = document.querySelector('#activityCardsDiv');
let actNbrs = [];
for(let i = 0; i<10; i++) {
    fetch('https://www.boredapi.com/api/activity/')
    .then((response) => response.json())
    .then((data) => {
        let actNbr = (i + 1);
        actNbrs.push(actNbr);
        sessionStorage.setItem('nbr'+1, actNbrs);
        let locationNames = JSON.parse(sessionStorage.getItem('locations'));
        activityCards.innerHTML +=
        `<div id="divActivity${actNbr}"  class="card" style="width: 18rem;">
            <img id='img${actNbr}' class="card-img-top" src = ${imageSrcArray[actNbr]}>
            <div class="card-header">
                <p class= "activityNbr">Activity ${actNbr}:</p>
                </div>
            <div class="card-body">
                <h3 class="card-title">${data.activity}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="activitiesList">Type: ${data.type.toUpperCase()}</li>
                <li class="activitiesList">Participants: ${data.participants}</li>
                <li class="activitiesList">Price point (0-10): ${(data.price * 10)}</li>
                <li id='location${actNbr}' class="activitiesList locations">Location: ${locationNames[actNbr]}</li>
            </ul>
        </div>`;
    });
}

// Validated 2022-11-14 // KP
