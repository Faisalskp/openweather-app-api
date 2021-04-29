# what is this?

provides historical, current and forecasted weather data via light-speed APIs..

# Installation 

`npm i openweather-app-api --save`

Then...

```
import { openweather-app-api } from 'openweather-app-api';

var token = '' // add your api token 

var coordinatesObj = { "lat": "", "lng": "" } //add lat and lng values 

var locatonName = "" // add target name 

```

## How to Use

* *Step 1* : Please login https://openweathermap.org/
* *Step 2* : Get API key from "My API Keys" like "######################"
* *Step 3* : Add lat and lng values in coordinatesObj 
   
   If you don't have lat and lng value the you can go the step4

* *Step 4* : Add location name in locatonName as string. like "UK,USA,India,Pakistan"

## Properties

openweather-app-api provides historical, current and forecasted weather data via light-speed APIs..
openweather-app-api require properties:

* *token* - _String_ ("################")
* *coordinatesObj* - _Object_ (with "lat" and "lng" values)
* *locatonName* -_String_ ("Pakistan")
  
## Note

*  You can get weather details using both properties coordinatesObj and locatonName.
*  You can use only coordinatesObj for weather details with token.
*  You can use only locatonName for weather details with token.
   

   
   

