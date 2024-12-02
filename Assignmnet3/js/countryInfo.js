/** API to be used: 
 * 'eed16b8801cb9ade8b710dbc7a86c828'; // OpenWeather API key
 * 'AIzaSyBwv9jSYknoJWG2n4nljZN_USXJfjCAjhc'; // Google Maps API key
 * '1874880fe8e34b4b15276c73'; // ExchangeRate API key
 */

//STEP 1: API KEY - declared and initialized
//NOTES: reference from lesson 11
const openWeatherAPIKey = 'eed16b8801cb9ade8b710dbc7a86c828';
const googleMapsAPIKey = 'AIzaSyBwv9jSYknoJWG2n4nljZN_USXJfjCAjhc';
const exchangeRateAPIKey = '1874880fe8e34b4b15276c73';

//STEP 2: target the HTML 
const cityApi = document.querySelector('#city');
const countryApi = document.querySelector('#country');
const searchBtnApi = document.querySelector('#searchBtn');
const resetBtnApi = document.querySelector('#resetBtn');
const resultAiOutput = document.querySelector('#resultsDetail');

//STEP 3: Location detail funcation
function getCityCountryInfo() {
    //STEP 3a: input validation --- this is to first check if user enters city and country (since i'm doing about countires and cities)
    const cityValidate = cityApi.value.trim();
    const countryValidate = countryApi.value.trim();
    if (cityValidate === '' || countryValidate === '') {
        resultAiOutput.textContent = 'Please you have to enter both COUNTRY & CITY name.'; 
        resultAiOutput.style.visibility = 'visible'; //making the mssh visible
        return;
    }
    
    //STEP 4: API call to get location details

        //STEP 4a: weather details -- using fetch (lesson-11)
        let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${openWeatherAPIKey}`;
        fetch(openWeatherUrl)
        .then(openWeatheresponse => openWeatheresponse.json())//converts to the JSON (the outout as from the document)
        .then(openWeatherResponse => { 
            //since the google maps requre the lat & lon and from information pulled from the openWeather.
            //NOTES: trying to connect three API's together...
            const lat = openWeatherResponse.coord.lat; //from JSON format API response example - "coord" lat & lon: 
            const lon = openWeatherResponse.coord.lon; //from JSON format API response example - "coord" lat & lon:

        //STEP 4b: TimeZone details -- using fetch (lesson-11)
        let googleMapsUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp&key=${GOOGLE_MAPS_API_KEY}`; // added lat and lon from the openWeatherUrl
        fetch(googleMapsUrl) 
        .then(googleMapsResponse => googleMapsResponse.json())//converts to the JSON 
        .then(googleMapsResponse => {
            //STEP 4c: ExchangeRate details -- using fetch (lesson-11)


        

        
            

    

}