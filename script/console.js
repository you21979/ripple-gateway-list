#!/usr/bin/env node
var gateway = require('./gateway');
gateway().then(function(list){
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
})

