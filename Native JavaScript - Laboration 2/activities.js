// Navbar
document.querySelector('body > nav > div > a').textContent = 'LABORATION #2';
document.getElementById('nav-activities').style.fontWeight = 'bolder';
document.getElementById('nav-activities').style.color = 'black';

// Welcome Form
let welcomeText = document.querySelector('#welcome');
let userName = localStorage.getItem('savedName');
if (userName) {
  welcomeText.innerHTML = 'Welcome ' + userName + ' !';
} else {
  welcomeText.innerHTML = 'Welcome!';
}

// Create image array
let imageSrcArray = [
  'images/activity_cards/animal-g2c1cc6c5d_1280.png',
  'images/activity_cards/bicycle-g27230b8da_1920.png',
  'images/activity_cards/bird-g9c4518ab3_1280.png',
  'images/activity_cards/brain-gd7e6d92e3_1920.png',
  'images/activity_cards/cartoon-gf17839d2e_1920.jpg',
  'images/activity_cards/cat-g1eee721d9_1920.jpg',
  'images/activity_cards/cloud-g73ad2792c_1920.jpg',
  'images/activity_cards/girl-gdb7316264_1920.jpg',
  'images/activity_cards/luggage-g5a1cd6bfe_1920.jpg',
  'images/activity_cards/music-g9b2e9d08a_1280.png',
  'images/activity_cards/rabbit-gfecabd579_1280.png',
  'images/activity_cards/rainbow-g3b4853b53_1920.png',
  'images/activity_cards/sheep-gefd72f0de_1920.jpg',
  'images/activity_cards/sloth-gdf2252f0c_1920.png',
  'images/activity_cards/cat-g2f9233b09_1920.jpg',
  'images/activity_cards/fox-g8cba29c22_1920.jpg',
  'images/activity_cards/cat-g49a1182d6_1920.png',
  'images/activity_cards/job-gbff5c5524_1920.png',
  'images/activity_cards/space-g74165b711_1920.jpg',
];
// shuffle image array
imageSrcArray.sort(function () {
  return 0.5 - Math.random();
});

// Create location array
fetch('https://avancera.app/cities/')
  .then((response) => response.json())
  .then((location) => {
    let locationNames = [];
    location.forEach((location) => {
      locationNames.push(location.name);
    });
    locationNames.sort(function () {
      return 0.5 - Math.random();
    });
    sessionStorage.setItem('locations', JSON.stringify(locationNames));
  });

// Activity
const activityCards = document.querySelector('#activity-cards-div');
let actNbrs = [];
fetch('https://api.openbrewerydb.org/v1/breweries/random?size=10')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      let actNbr = i + 1;
      let brewery = data[i];

      console.log(brewery);

      actNbrs.push(actNbr);
      sessionStorage.setItem('nbr' + 1, actNbrs);
      let locationNames = JSON.parse(sessionStorage.getItem('locations'));
      let breweryType =
        brewery.brewery_type.substring(0, 1).toUpperCase() +
        brewery.brewery_type.substring(1).toLowerCase();
      activityCards.innerHTML += `

  <div class="col">
      <div id="divActivity${actNbr}"  class="card h-100" style="width: 21rem;">
        <img 
          id='img${actNbr}' class="card-img-top" 
          src = ${imageSrcArray[actNbr]}>
        <div class="card-header">
            <p>Brewery nr ${actNbr}:</p>
        </div>
        <div class="card-body">
          <h5 class="card-title">${brewery.name}</h5>
          <div class="card-list">
            <ul class="list-group list-group-flush">
                <li  class="list-group-item">Type: ${breweryType}</li>
                <li  class="list-group-item">
                  Current location: ${brewery.address_1}, 
                  ${brewery.city}, ${brewery.state}, ${brewery.country}
                </li>
                <li  class="list-group-item">
                  Suggested new location: 
                  <strong>${locationNames[actNbr]}</strong>
                </li>
            </ul>
          </div>
        </div>
          <div class="card-footer">
          <small class="text-muted">
            Website: 
            </small>
            <br>
          <small class="text-muted">
            <a 
              href='${brewery.website_url}' target=_blank >
              ${brewery.website_url}
            </a>
          </small>
        </div>
        </div>
      </div>`;
    }
  });

// Validated 2022-11-14 // KP
