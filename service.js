var request = require('request');

function listerClients(callbackOK, callbackKO) {

    request('https://hotelwebapi.herokuapp.com/clients?start=0&size=3', { json: true }, function(err, res, listeDeClients) {
      if (err) {
        callbackKO(err);
    } else {
        callbackOK(listeDeClients);
    }

});

}

exports.listerClients = listerClients;
