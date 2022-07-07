const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicnZjZXNoYXJhdGgiLCJhIjoiY2t2emd6dWQzMTRvdjJ3cWltZGNwMzhnMyJ9.uhgDlfb3VQxLLqn-SGO1NA&limit=1'
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1IjoicnZjZXNoYXJhdGgiLCJhIjoiY2t2emd6dWQzMTRvdjJ3cWltZGNwMzhnMyJ9.uhgDlfb3VQxLLqn-SGO1NA'
    request({ url, json: true }, (error, { body }) => {
        console.log(url)
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else 
        if(body.message){
            callback(body.message, undefined)
        }
        else
        if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
              callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// geocode("Bengaluru", (error, data) =>{
//     if(error)
//         console.log(error)
//     else
//     console.log(data)
// })

module.exports = geocode