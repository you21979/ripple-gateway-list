#!/usr/bin/env node
var list = require('./gateway');
var fs = require('fs');

var file = '../list/list.json';
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
