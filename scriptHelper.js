// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // Here is the HTML formatting for our mission target div.
  const missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = "<h2>Mission Destination</h2>";
  missionTarget.innerHTML = `<ol> 
                              <li>Name: ${name}</li>
                              <li>Diameter: ${diameter}</li>
                              <li>Star: ${star}</li>
                              <li>Distance from Earth: ${distance}</li>
                              <li>Number of Moons: ${moons}</li>

                             </ol>
                             <img src="${imageUrl}" />`
  /*
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: </li>
                   <li>Diameter: </li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: </li>
                   <li>Number of Moons: </li>
               </ol>
               <img src="">
  */
}

function submitForm(event) {
  event.preventDefault();
  const pilotName = document.getElementsByName("pilotName")[0].value;
  const copilotName = document.getElementsByName("copilotName")[0].value;
  const fuelLevel = document.getElementsByName("fuelLevel")[0].value;
  const cargoMass = document.getElementsByName("cargoMass")[0].value;
  console.log(`CargoMass: ${cargoMass} | fuel Level: ${fuelLevel}`);
  const error = validateInput(pilotName, copilotName, fuelLevel, cargoMass);
  if (error !== '') {
    alert(error);
    return;
  }
  formSubmission(document, [], pilotName, copilotName, Number(fuelLevel), Number(cargoMass));
}

function validateInput(pilotName, copilotName, fuelLevel, cargoMass) {
  if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
    return 'All fields are required!';
  }
  if (!isNaN(pilotName) || !isNaN(copilotName) || isNaN(fuelLevel) || isNaN(cargoMass)) {
    return 'Make sure to enter valid information for each field!';
  }
  return ''; // Success!
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  const faultyItems = document.getElementById('faultyItems');

  //   updateReq('pilotStatus', `Pilot ${pilot} is ready`);
  const pilotStatus = document.getElementById('pilotStatus');
  pilotStatus.innerHTML = (`Pilot ${pilot} is ready`);
  //   updateReq('copilotStatus', `Co-pilot ${copilot} is ready`);  
  const copilotStatus = document.getElementById('copilotStatus');
  copilotStatus.innerHTML = (`Co-pilot ${copilot} is ready`);
  if (fuelLevel < 10000) {                  //If false evaluate else if below
    const fuelStatus = document.getElementById('fuelStatus');
    fuelStatus.innerHTML = (`Not enough fuel for the journey`);
    const launchStatus = document.getElementById('launchStatus');
    launchStatus.innerHTML = ('Shuttle not ready for launch');
    launchStatus.style = 'color: red';
    faultyItems.style = 'visibility: visible';
  }
  if (cargoMass > 10000) {
    const cargoStatus = document.getElementById('cargoStatus');
    cargoStatus.innerHTML = ('The shuttle is too heavy for take-off');
    launchStatus.innerHTML = ('Shuttle not ready for launch')
    launchStatus.style = ('color: red');
    faultyItems.style = 'visibility: visible';
  }

  if (fuelLevel >= 10000 && cargoMass <= 10000) {
    launchStatus.innerHTML = ('Shuttle is ready for launch');
    faultyItems.style = 'visiblility: hidden';
    launchStatus.style = 'color: green';
  }

}

function updateReq(elementId, statusText) {
  const el = document.getElementById(elementId);
  el.innerHTML = statusText;
}

async function myFetch() {
  
  const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
  let planetsReturned = await response.json();
  
  
  // TODO: Fetch the JSON from the planets.json URL from the instructions
  // and return response.json()
  // planetsReturned = await fetch().then( function(response) {
  //     });

  return planetsReturned;
}

function pickPlanet(planets) {
  let ix = 5; // TODO: Randomly select a single integer
  ix = Math.floor(Math.random()*planets.length);
  //   let planets = planets[ix].length;
  // }
  return planets[ix];
  // TODO: Use Math.random() to select a random index 
  // between 0 and planets.length
  // then return that number
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
