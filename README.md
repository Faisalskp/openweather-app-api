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

```

# How can get apikey? 

```
step 1 : Login https://openweathermap.org 

step 2 : After login,then click on "My API keys"

step 3 : Here you can get default key and also can create a new apiKey.

Note: " This apiKey take some time to activate almost 15 to 20 minutes. "

```

# How can use? 

```
There are two methods for get weather details/api
  1) coordinates
  2) findByLocatonName

  You can select any method.

```

# 1) coordinates 

```
step 1 : make a function 

      async function usingCoordinates(apikey, coordinatesObj) {
         try {
            
         } catch (error) {
            throw error
         }
      }

step 2 : call the method "coordinates" eg, weatherApp.coordinates( pass api key , pass coordinate object )

       async function usingCoordinates(apikey, coordinatesObj) {
         try {
            let data = await weatherApp.coordinates(apikey, coordinatesObj)
            console.log(data, 'usingCoordinates')
         } catch (error) {
            throw error
         }
      }      

step 3 : call the function

      usingCoordinates(apikey, coordinatesObj)

```

# 2) findByLocatonName
```
step 1 : make a function 

      async function usingLocationName(apikey, location) {
         try {
            
         } catch (error) {
            throw error
         }
      }

step 2 : call the method "findByLocatonName" eg, weatherApp.findByLocatonName( pass api key , pass location )

       async function usingCoordinates(apikey, coordinatesObj) {
         try {
            let data = await weatherApp.findByLocatonName(apikey, location)
            console.log(data, 'usingLocationName')
         } catch (error) {
            throw error
         }
      }      

step 3 : call the function

      usingLocationName(apikey, location)

```
   

