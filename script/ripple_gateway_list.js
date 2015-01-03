var rp = require('request-promise');

var dataload = module.exports = function(){
    var URL = "https://raw.githubusercontent.com/ripple/ripplecharts-frontend/develop/src/assets/gateways.json";
    return rp(URL).
        then(JSON.parse)
}

