/**
 * Created by KC on 23/01/2017.
 */
//https://maps.googleapis.com/maps/api/geocode/json?address=%E5%8F%B0%E4%B8%AD
const request = require('request');

// Get geocode through GOOGLD MAPS Geocode API
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%E5%8F%B0%E4%B8%AD',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(response, undefined, 2));
});