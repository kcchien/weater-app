/**
 * Created by KC on 23/01/2017.
 */

const request = require('request');

var geocodeAddress = (address, callback) => {

    // Encode string from user input
    var encodedAddress = encodeURIComponent(address);

    // Get geocode through GOOGLE MAPS Geocode API
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&region=tw&key=AIzaSyAo1sM7AZJg_iq3Pl7475sRhgBXLA7E7fA`,
        json: true
    }, (error, response, body) => {
        //console.log(JSON.stringify(response, undefined, 2));
        //Handle callback error
        if(error) {
            callback('Unable to connect to Google servers.');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address.');
        }
        else if(response.statusCode !== 200) {
            callback('Fetch error');
        } else {

            callback(undefined, {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;


