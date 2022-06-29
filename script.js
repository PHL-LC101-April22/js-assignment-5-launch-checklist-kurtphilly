// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       let planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });

   const form = document.getElementsByTagName('form')[0];
   form.addEventListener("submit", submitForm);

});
   // TODO: 1. Use preventDefault() to prevent a request from being sent out and page reloading.
   // TODO: 2. High level: Add event listener to the button for "click" event that
   //       calls the "formSubmission" function. I recommend writing a helper
   //       function to extract all the fields from the index page.
  

   //       2a. Write a helper function called "submitForm()" which has no arguments (in scriptHelper.js)
   //       2b. submitForm will use "document.getElementByName" to extract each field and
  //            validate each element. (in scriptHelper.js)
  //        2c. After validating ALL fields, pass them to "formSubmission" (in scriptHelper.js)
  //        2d. Add "submitForm" as the onClick handler (in script.js)
  //      
