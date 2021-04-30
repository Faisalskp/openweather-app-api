# what is this?

provides historical, current and forecasted weather data via light-speed APIs..

# Installation 

`npm i openweather-app-api --save`

Then...

```
const weatherApp = require('openweather-app-api');

var apikey = '' 

var coordinatesObj = { "lat": "43", "lng": "70" }

var location = "Pakistan"

usingCoordinates(apikey, coordinatesObj)

async function usingCoordinates(apikey, coordinatesObj) {
    try {
        let data = await weatherApp.coordinates(apikey, coordinatesObj)
        console.log(data, 'usingCoordinates')
    } catch (error) {
        throw error
    }
}

usingLocationName(apikey, location)

async function usingLocationName(apikey, location) {
    let data = await weatherApp.findByLocatonName(apikey, location)
    console.log(data, 'usingLocationName')
} 

```



   
   

