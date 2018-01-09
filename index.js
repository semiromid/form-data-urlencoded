'use strict';

var index = function (data) {
    
    var str = '';
    JSON.parse(JSON.stringify(data), function (key, value) {
        if(str === '' && key !== ''){
            str = encodeURIComponent(key)+'='+encodeURIComponent(value);
        }else if(key !== ''){
            str = str+'&'+encodeURIComponent(key)+'='+encodeURIComponent(value);
        }
    });

    return str;
}
module.exports = index;
