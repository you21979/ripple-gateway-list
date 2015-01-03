#!/usr/bin/env node
var fs = require('fs');
var gateway = require('./gateway');
var file = '../list/list.json';
gateway().then(function(list){
    var w = [];
    list.forEach(function(v){
        w.push({
            "name":v.name,
            "country":v.country,
            "domain":v.domain,
            "address":v.address,
            "assets" : v.assets,
        })
    })
    fs.writeFileSync(file, JSON.stringify(w), 'utf8');
})



