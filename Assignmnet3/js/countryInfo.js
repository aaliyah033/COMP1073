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
        .then(openWeatherDetails => { 
            //since the google maps requre the lat & lon and from information pulled from the openWeather.
            //NOTES: trying to connect three API's together...
            const lat = openWeatherResponse.coord.lat; //from JSON format API response example - "coord" lat & lon: 
            const lon = openWeatherResponse.coord.lon; //from JSON format API response example - "coord" lat & lon:

        //STEP 4b: TimeZone details -- using fetch (lesson-11)
        let googleMapsUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp&key=${GOOGLE_MAPS_API_KEY}`; // added lat and lon from the openWeatherUrl
        fetch(googleMapsUrl) 
        .then(googleMapsResponse => googleMapsResponse.json())//converts to the JSON 
        .then(googleMapsDetails => {
            //STEP 4c: ExchangeRate details -- using fetch (lesson-11)
            let exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${exchangeRateAPIKey}/latest/USD`;
            fetch(exchangeRateUrl)
            .then(exchangeRateResponse => exchangeRateResponse.json())//converts to the JSON
            .then(exchangeRateDetails => {
                 //STEP 5: Displaying details 
                 let APIUrl = chosenCountry(openWeatherDetails,googleMapsDetails,exchangeRateDetails);
                 resultAiOutput.textContent = APIUrl;
                 resultAiOutput.style.visibility = 'visible'; })
                 
                 //STEP 6: Error added for each API 
                 //now for the ERRORS - (lesson-11, nytimes.js)
                 .catch(error => { 
                    resultAiOutput.textContent = `Error: No currency information.`;
                    resultAiOutput.style.visibility = 'visible';
                    console.log('Error:',error)
                 });
                    })
                    .catch(error => {
                        resultAiOutput.textContent = `Error: No timezone information.`
                        resultAiOutput.style.visibility = 'visible';
                        console.log('Error:',error)
                        });
                        })
                        .catch(error => {
                            resultAiOutput.textContent = `Error: No weather information.`
                            resultAiOutput.style.visibility = 'visible';
                            console.log('Error:',error)
                            });
}

//STEP 7: Function for Displaying/showing  all the details from the searched country & city 
//NOTE: The API that shows the (location, weather, time zone, currency), this is to basically return all the values...
//let APIUrl = chosenCountry(openWeatherDetails,googleMapsDetails,exchangeRateDetails);
function chosenCountry (openWeatherDetails,googleMapsDetails,exchangeRateDetails){
    
    let APIUrl = 
    `Information entered:\n`+
    `City: ${openWeatherDetails.name}\n`+
    `Country: ${openWeatherDetails.country}\n\n` +

    `Weather Information\n` +
    `Weather Description: ${openWeatherDetails.weather[0].description}\n` +
    `Temperature: ${openWeatherDetails.main.temp}°C\n` +
    `Feels Like: ${openWeatherDetails.main.feels_like}°C\n` +
    `Humidity: ${openWeatherDetails.main.humidity}%\n` +
    `Wind Speed: ${openWeatherDetails.wind.speed} m/s\n` +
    `Clouds: ${openWeatherDetails.clouds.all}\n\n` +

    `Time Zone Information\n` +
    `Time Zone: ${googleMapsDetails.timezone}\n` +
    `Time Zone ID: ${googleMapsDetails.timezoneId}\n` +
    `Time Zone Name: ${googleMapsDetails.timezoneName}\n\n` +

    `Currency Information\n` +
    `Base Currency: ${exchangeRateDetails.base_code}\n` + //from the document "base_code": "USD",
    //currency will use: //USD,EUR,GBP,JPY,AUD,CAD,TZS,AED
    `USD Rate: ${exchangeRateDetails.conversion_rates}`//"conversion_rates":
    `EUR Rate: ${exchangeRateDetails.conversion_rates}`
    `GBP Rate: ${exchangeRateDetails.conversion_rates}`
    `JPY Rate: ${exchangeRateDetails.conversion_rates}`
    `AUD Rate: ${exchangeRateDetails.conversion_rates}`
    `CAD Rate: ${exchangeRateDetails.conversion_rates}`
    `TZS Rate: ${exchangeRateDetails.conversion_rates}`
    `AED Rate: ${exchangeRateDetails.conversion_rates}`

    //For Testing...
    console.log(APIUrl);

}

//STEP 8: Now for reset button 
function resetButton(){
    cityApi.value = ''; //this will clear the city input 
    countryApi.value = ''; //this will clear the country input
    resultAiOutput.value = ''; //this will clear result
    resultAiOutput.textContent = ''; //this will clear the results provided  
}





                 

               


            


        

        
            

    

