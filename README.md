# what is this?

provides historical, current and forecasted weather data via light-speed APIs..

# Installation 

`npm i openweather-app-api --save`

Then...

```
import { coordinates,findByLocatonName } from "openweather-app-api";

var apikey = ''

var coordinatesObj = { "lat": "43", "lng": "70" } 

var location = "Pakistan" 

```

## How to Use

*  async function usingCoordinates(apikey,coordinatesObj){
    let data = await coordinates(apikey,coordinatesObj)
    console.log(data,'usingCoordinates')
   }

*  async function usingLocationName(apikey,location){
    let data = await findByLocatonName(apikey, location)
    console.log(data,'usingLocationName')
   }
*  usingCoordinates(apikey,coordinatesObj)
*  usingLocationName(apikey,location)

   
   

