var Client = require('node-rest-client').Client;

var client = new Client();

if (!process.env.CONSUMER_KEY) {
    var env = require('./env.js');
}

var accessToken = process.env.ACCESS_TOKEN;

client.get("https://api.instagram.com/v1/users/self/media/recent?access_token=" + accessToken, function(data, response, err) {
    if(!err) {
        console.log(data.data[0].link);
        // console.log(response);
    }
});
