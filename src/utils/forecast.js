const request = require('request')

const forecast = (latitude, longitude, callback) => {
   // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=8753dcb2d965cdaf0e13b0d87358b694&query='+ latitude + ',' + longitude
    console.log(url)
    request({ url, json: true }, (error, response) => {
        if(error)
        {
            return callback('Forecast service is not available', undefined)
        }
        if( response.body.error )
        {
            return callback('Location is not available', undefined)
        }
        else {
            callback(undefined, 'It is currently '+response.body.current.temperature+' degress out. It feels like '+response.body.current.feelslike+' degress out')
        }
    })
}

module.exports = forecast