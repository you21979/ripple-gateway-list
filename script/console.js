var list = require('./gateway');
list.forEach(function(v){
    console.log(
    JSON.stringify({
        "name":v.name,
        "country":v.country,
        "domain":v.domain,
        "address":v.address,
        "assets" : v.assets,
    })
    )
})
