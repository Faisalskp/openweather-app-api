const weatherApp = require('openweather-app-api');

var apikey = '6eb79054aa616c5b0ae1cf3df4db6d3f' 

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