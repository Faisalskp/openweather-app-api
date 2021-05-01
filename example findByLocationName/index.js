const weatherApp = require('openweather-app-api');

var apikey = '' 

var location = "Pakistan"

// using usingLocationName
async function usingLocationName(apikey, location) {
   try {
      let data = await weatherApp.findByLocatonName(apikey, location)
      console.log(data, 'usingLocationName')
   } catch (error) {
      throw error
   }
} 
usingLocationName(apikey, location)