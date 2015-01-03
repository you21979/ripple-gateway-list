var gateway_data = require('./ripple_gateway_list');

var Gateway = function(name, country, domain, assets){
    this.name = name;
    this.country = country;
    this.domain = domain;
    this.assets = assets;
}

var dataload = module.exports = function(){
    return gateway_data().then(function(data){
        var list = [];
        data.forEach(function(gateway){
            var assets = {};
            gateway.accounts.forEach(function(account){
                assets[account.address] = account.currencies.map(function(v){
                    if(v instanceof Object) return v['label']
                    else return v
                })
            })
            list.push(new Gateway(gateway.name, "", gateway.domain ? gateway.domain : '', assets));
        })
        return list;
    }).then(function(list){
        var update_list = [
            {
                name : 'Ripple Trade Japan',
                assets : {
                    "rsiZR2t24SX69XxLNNwArqVn5nJyHyFemk":["RTS"],
                }
            },
            {
                name : 'Ripple Market Japan',
                assets : {
                    "rJRi8WW24gt9X85PHAxfWNPCizMMhqUQwg":["JPY","RMJ"],
                }
            }
        ];
        update_list.forEach(function(u){
            list.forEach(function(gateway){
                if(gateway.name === u.name){
                    Object.keys(u.assets).forEach(function(key){
                        gateway.assets[key] = u.assets[key]
                    })
                }
            });
        })
        return list;
    })
}
