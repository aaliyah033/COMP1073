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