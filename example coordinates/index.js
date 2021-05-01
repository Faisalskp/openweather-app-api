const weatherApp = require('openweather-app-api');

var apikey = '' 

var coordinatesObj = { "lat": "43", "lng": "70" }


// using coordinates latitude and longitude
async function usingCoordinates(apikey, coordinatesObj) {
    try {
       let data = await weatherApp.coordinates(apikey, coordinatesObj)
       console.log(data, 'usingCoordinates')
    } catch (error) {
       throw error
    }
 } 
 usingCoordinates(apikey, coordinatesObj)