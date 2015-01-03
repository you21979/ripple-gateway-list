var Gateway = function(name, country, domain, assets){
    this.name = name;
    this.country = country;
    this.domain = domain;
    this.assets = assets;
}
var list = [];

// ----------- SG ------------------
list.push(new Gateway(
    "ripple singapore",
    "SG",
    "https://www.ripplesingapore.com",
    {
        "r9Dr5xwkeLegBeXq6ujinjSBLQzQ1zQGjH":["SGD","USD","XAG","XAU","XPT"],
    }
))
// ----------- CN ------------------
list.push(new Gateway(
    "ripple cn",
    "CN",
    "https://ripplecn.com/",
    {
        "rnuF96W4SZoCJmbHYBFoJZpR8eCaxNvekK":["BTC","LTC","CNY"],
    }
))
// ----------- EU ------------------
list.push(new Gateway(
    "bitstamp",
    "EU",
    "https://www.bitstamp.net",
    {
        "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B":["USD","BTC"],
    }
))
// ----------- US ------------------
list.push(new Gateway(
    "snapswap",
    "US",
    "https://snapswap.us",
    {
        "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q":["USD","EUR","GBP","BTC"],
    }
))
// ----------- JP ------------------
list.push(new Gateway(
    "ripple trade japan",
    "JP",
    "http://rippletrade.jp",
    {
        "rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6":["JPY"],
        "rsiZR2t24SX69XxLNNwArqVn5nJyHyFemk":["RTS"],
    }
))
list.push(new Gateway(
    "tokyo jpy issuer",
    "JP",
    "https://tokyojpy.com",
    {
        "r94s8px6kSw1uZ1MV98dhSRTvc6VMPoPcN":["JPY"],
    }
))
list.push(new Gateway(
    "ripple market japan",
    "JP",
    "http://ripple-market.jp",
    {
        "rJRi8WW24gt9X85PHAxfWNPCizMMhqUQwg":["JPY","RMJ"],
    }
))
list.push(new Gateway(
    "ripple exchange tokyo",
    "JP",
    "https://ripple-exchange.tokyo",
    {
        "r9ZFPSb1TFdnJwbTMYHvVwFK1bQPUCVNfJ":["JPY"],
    }
))
module.exports = list;
