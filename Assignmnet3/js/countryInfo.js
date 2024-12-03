/** API to be used: 
 * '18866db88589cd545b19be610d87df85'; // OpenWeather API key
 * 'AIzaSyBAzQZFi4JKjDfHUuZHYGUrhSXDQ8JJ2A4'; // Google Maps API key
 * '53535e11716700db95019d7d '; // ExchangeRate API key
 */

//STEP 1: API KEY - declared and initialized
//NOTES: reference from lesson 11
const openWeatherAPIKey = '18866db88589cd545b19be610d87df85';
const googleMapsAPIKey = 'AIzaSyBAzQZFi4JKjDfHUuZHYGUrhSXDQ8JJ2A4';
const exchangeRateAPIKey = '53535e11716700db95019d7d';

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

    if (!cityValidate || !countryValidate ) {
        resultAiOutput.textContent = 'Please you have to enter both COUNTRY & CITY name.'; 
        resultAiOutput.style.visibility = 'visible'; //making the mssh visible
        return;
    }

    //EXTRA step: show me if something is happening 
    resultAiOutput.textContent ='Getting your information'
    resultAiOutput.style.visibility = 'visible'; //making the mssh visible
    
    //STEP 4: API call to get location details

        //STEP 4a: weather details -- using fetch (lesson-11)
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValidate},${countryValidate}&appid=${openWeatherAPIKey}`;

        fetch(openWeatherUrl)
        .then(openWeatheResponse => openWeatheResponse.json())//converts to the JSON (the outout as from the document)
        .then(openWeatherDetails => { 
            if (!openWeatherDetails.coord){
                throw new Error ('Invalid Response')
            }
            //since the google maps requre the lat & lon and from information pulled from the openWeather.
            //NOTES: trying to connect three API's together...
            console.log(openWeatherDetails)
            const lat = openWeatherDetails.coord.lat; //from JSON format API response example - "coord" lat & lon: 
            const lon = openWeatherDetails.coord.lon; //from JSON format API response example - "coord" lat & lon:

        //STEP 4b: TimeZone details -- using fetch (lesson-11)
        const timestamp = Math.floor(Date.now() / 1000); // Current time in seconds
        const googleMapsUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=${googleMapsAPIKey}`;

        return fetch(googleMapsUrl) 
            .then(googleMapsResponse => googleMapsResponse.json())//converts to the JSON 
            .then(googleMapsDetails => {

            //STEP 4c: ExchangeRate details -- using fetch (lesson-11)
            const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${exchangeRateAPIKey}/latest/USD`;
            return fetch(exchangeRateUrl)
            .then(exchangeRateResponse => exchangeRateResponse.json())//converts to the JSON
            .then(exchangeRateDetails => {
                 //STEP 5: Displaying details 
                 const APIUrl = chosenCountry(openWeatherDetails, googleMapsDetails, exchangeRateDetails);
                 resultAiOutput.textContent = APIUrl;
                 resultAiOutput.style.visibility = 'visible';
                 
                 })
                //STEP 6: Error added for each API 
                 //now for the ERRORS - (lesson-11, nytimes.js)
                .catch(error => { 
                    console.log('Error:', error);
                    resultAiOutput.textContent = `Error: No currency information.`;
                    resultAiOutput.style.visibility = 'visible';
                    
                   
                });
                    })
                    .catch(error => {
                        console.log('Error:', error);
                        resultAiOutput.textContent = `Error: No timezone information.`
                        resultAiOutput.style.visibility = 'visible';
                       
                        });
                        })
                        .catch(error => {
                            console.log('Error:', error);
                            resultAiOutput.textContent = `Error: No weather information.`
                            resultAiOutput.style.visibility = 'visible';
                            
                            });
}

//STEP 7: Function for Displaying/showing  all the details from the searched country & city 
//NOTE: The API that shows the (location, weather, time zone, currency), this is to basically return all the values...
//let APIUrl = chosenCountry(openWeatherDetails,googleMapsDetails,exchangeRateDetails);
function chosenCountry (openWeatherDetails, googleMapsDetails, exchangeRateDetails){
    
    return (
    `Information entered:\n`+
    `City: ${openWeatherDetails.name}\n`+
    `Country: ${openWeatherDetails.sys.country}\n\n` +

    `Weather Information\n` +
    `Weather Description: ${openWeatherDetails.weather[0].description}\n` +
    `Temperature: ${(openWeatherDetails.main.temp )}°C\n` +
    `Feels Like: ${(openWeatherDetails.main.feels_like)}°C\n` +
    `Humidity: ${openWeatherDetails.main.humidity}%\n` +
    `Wind Speed: ${openWeatherDetails.wind.speed} m/s\n` +
    `Clouds: ${openWeatherDetails.clouds.all}\n\n` +

    `Time Zone Information\n` +
    `Time Zone ID: ${googleMapsDetails.timeZoneId}\n` +  
    `Time Zone Name: ${googleMapsDetails.timeZoneName}\n\n` +

    `Currency Information\n` +
    `Base Currency: ${exchangeRateDetails.base_code}\n` + //from the document "base_code": "USD",
    //currency will use: //USD,EUR,GBP,JPY,AUD,CAD,TZS,AED
    `USD Rate: ${exchangeRateDetails.conversion_rates.USD}\n` +//"conversion_rates":
    `EUR Rate: ${exchangeRateDetails.conversion_rates.EUR}\n` +
    `GBP Rate: ${exchangeRateDetails.conversion_rates.GBP}\n` +
    `JPY Rate: ${exchangeRateDetails.conversion_rates.JPY}\n` +
    `AUD Rate: ${exchangeRateDetails.conversion_rates.AUD}\n` +
    `CAD Rate: ${exchangeRateDetails.conversion_rates.CAD}\n` +
    `TZS Rate: ${exchangeRateDetails.conversion_rates.TZS}\n` +
    `AED Rate: ${exchangeRateDetails.conversion_rates.AED}\n` 
    );
    
}

//STEP 8: Now for reset button 
function resetButton(){
    cityApi.value = ''; //this will clear the city input 
    countryApi.value = ''; //this will clear the country input
    resultAiOutput.textContent = ''; //this will clear the results provided 
    resultAiOutput.style.visibility ='hidden';
}

//STEP 9: Now for the event listener for the two buttons (reset and search)
document.getElementById('resetBtn').addEventListener('click',resetButton);
document.getElementById('searchBtn').addEventListener('click',getCityCountryInfo);



                 
               

            


        

        
            

    

