// Navbar
document.querySelector("body > nav > div > a").textContent = ('LABORATION #2');
document.getElementById('navCities').style.fontWeight = 'bolder';
document.getElementById('navCities').style.color = 'black';

// Welcome
document.querySelector('#welcome').innerHTML = ('Welcome ' + localStorage.getItem('savedName') + '!');

// Cities
// hide text elements initially
document.getElementById('postRegistered').hidden = true;
document.getElementById('putRegistered').hidden = true;
document.getElementById('deleteRegistered').hidden = true;
document.getElementById('selectText').hidden = true;
document.querySelector('#selectedCity').hidden = true;
document.querySelector('#updateBtnDiv').hidden = true;
const citiesResults = document.getElementById('citiesTable');
// prevent reloading after button click
function btnclick(e) {
   e.preventDefault();
}
fetch('https://avancera.app/cities/')
.then(response => response.json())
.then(cities => {
  let rowNbr = 0;
  let cityNames = [];
  let cityID = [];
  cities.forEach(city => {
    rowNbr++;
    cityNames.push(city.name);
    cityID.push(city.id);
    citiesResults.innerHTML +=
    `<tr>
        <td class=nbrRow>` + rowNbr + `</td>
        <td class=nameRow>${city.name}</td>
        <td class=popRow>${city.population}</td>
    </tr>`;
// fill dropdown list
    const selectCity = document.getElementById('exampleFormControlSelect1');
    let citiesIdArray = [];
    selectCity.innerHTML +=
    `<option value=${city.id}>${city.name}</option>`;
    citiesIdArray.push(cities.id);
  });
// select city
  let selectElement = document.getElementById('exampleFormControlSelect1');
  selectElement.addEventListener('click', () => {
    let output = selectElement.value;
    sessionStorage.setItem('chosenID', output);
    let index = cityID.indexOf(output);
    sessionStorage.setItem('chosenName', cityNames[index]);
    document.querySelector('#selectedCity').innerHTML = output;
// edit existing city
    let editBtn = document.getElementById('putBtn');
    editBtn.addEventListener('click', () => {
      let editedCityNameField = document.getElementById('newName');
      let editedCityName = editedCityNameField.value;
      let editedCityPop = +document.getElementById('newPop').value;
      let chosenID = sessionStorage.getItem('chosenID');
      fetch('https://avancera.app/cities/'+output, {
        body: JSON.stringify({id: chosenID, name: editedCityName, population: editedCityPop}),
        headers: {'Content-Type': 'application/json'},
        method: 'PUT'
      })
      .then(() => {
        document.getElementById('postRegistered').hidden = true;
        document.getElementById('putRegistered').innerHTML = (sessionStorage.getItem('chosenName') + ' has been updated to ' + editedCityName + ' with a population of ' + editedCityPop + ' people.');
        document.getElementById('putRegistered').hidden = false;
        document.getElementById('deleteRegistered').hidden = true;
        document.querySelector('#updateBtnDiv').hidden = false;
      });
    });
    let deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', () => {
      let chosenID = sessionStorage.getItem('chosenID');
      fetch('https://avancera.app/cities/'+chosenID, {
        method: 'DELETE'
      })
      .then(() => {
        document.getElementById('postRegistered').hidden = true;
        document.getElementById('putRegistered').hidden = true;
        document.getElementById('deleteRegistered').innerHTML = (sessionStorage.getItem('chosenName') + ' has been deleted.');
        document.getElementById('deleteRegistered').hidden = false;
        document.querySelector('#updateBtnDiv').hidden = false;
      });
    });
  });
});

// register new city
let registerBtn = document.getElementById('postBtn');
registerBtn.addEventListener('click', () => {
  let newCityNameField = document.getElementById('newName');
  let newCityName = newCityNameField.value;
  let newCityPop = +document.getElementById('newPop').value;
  fetch('https://avancera.app/cities/', {
    body: JSON.stringify({name: newCityName, population: newCityPop}),
    headers: {'Content-Type': 'application/json'},
    method: 'POST'
  })
  .then(() => {
    document.getElementById('postRegistered').hidden = false;
    document.getElementById('putRegistered').hidden = true;
    document.getElementById('deleteRegistered').hidden = true;
    document.getElementById('postRegistered').innerHTML = newCityName + ' has been registered with a population of ' + newCityPop + ' people.';
    document.querySelector('#updateBtnDiv').hidden = false;
  });
});
// reload page after clicking Ok button
let updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', () => {
  location.reload();
});

// Validated 2022-11-14 // KP
