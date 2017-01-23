/**
 * Created by KC on 23/01/2017.
 */
//https://maps.googleapis.com/maps/api/geocode/json?address=%E5%8F%B0%E4%B8%AD


// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
//
// const argv = yargs.
//     options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });
//https://api.darksky.net/forecast/49ea7b67459cf27733fc36f2ebd6b6bc/37.8267,-122.4233

const request = require('request');

request({
    url: `https://api.darksky.net/forecast/49ea7b67459cf27733fc36f2ebd6b6bc/37.8267,-122.4233`,
    json: true
}, (error, response, body) => {

    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }

});