var http = require('http');

const coordinates = async (apikey, coordinatesObj) => {
  try {
    let getLat = coordinatesObj.lat
    let getLng = coordinatesObj.lng
    let getToken = apikey
    let data = await http.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${getLat}&lon=${getLng}&units=metric&appid=${getToken}`)
    return data
  } catch (error) {
    throw error
  }
};

const findByLocatonName = async (apikey, location) => {
  try {
    let getName = location
    let getToken = apikey
    let data = await http.get(`http://api.openweathermap.org/data/2.5/weather?q=${getName}&units=metric&appid=${getToken}`)
    return data
  } catch (error) {
    throw error
  }
};

module.exports = { coordinates, findByLocatonName };