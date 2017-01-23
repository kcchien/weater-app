/**
 * Created by jason on 2017/1/23.
 */

const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/49ea7b67459cf27733fc36f2ebd6b6bc/${lat},${lng}?units=ca&lang=zh-tw`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }

    });
};

module.exports.getWeather = getWeather;
