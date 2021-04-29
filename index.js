var http = require('http');
var token = "" // add your api token 
var coordinatesObj = { "lat": "44", "lng": "70" } //add lat and lng values
var locatonName = "Pakistan" // add target name 

class weatherApp {

  constructor(apikey) {
    this.apikey = apikey;
  }

  findByCoordinates(properties) {
    try {
      var type = typeof (properties)
      if (type === 'object' && type !== null) {
        if (!properties.lat) {
          throw "lat property is require"
        }
        if (!properties.lng) {
          throw "lng property is require"
        }
        if (properties.lat && properties.lng) {
          Coordinates(properties, this.apikey)
        }
      } else {
        throw "Please pass only object"
      }
    } catch (error) {
      throw error
    }
  }

  findByLocatonName(name) {
    try {
      var type = typeof (name)
      if (type === 'string' && type !== null) {
        findByName(name, this.apikey)
      } else {
        throw "Please pass only string"
      }
    } catch (error) {
      throw error
    }
  }
}
const appWeather = new weatherApp(token)

async function Coordinates(obj, apikey) {
  let data = await http.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&units=metric&appid=${apikey}`)
  return data
}
async function findByName(name, apikey) {
  let data = await http.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apikey}`)
  return data
}

appWeather.findByCoordinates(coordinatesObj)
appWeather.findByLocatonName(locatonName)


module.exports.appWeather = appWeather


