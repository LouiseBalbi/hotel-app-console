//var request = require('request');

export class Service {
    
    request: any;

    constructor() {
        this.request = require('request-promise-native');
    }


        listerClients() {

    return this.request.get('https://hotelwebapi.herokuapp.com/clients?start=0&size=3', { json: true});
}

findByName(nomAChercher:string) {
    return this.request.get(`https://hotelwebapi.herokuapp.com/clients/nom=${nomAChercher}`, { json: true });
}

posterClient(saisieNom:string, saisiePrenom:string) {
    return this.request.post({
        url: 'https://hotelwebapi.herokuapp.com/clients',
        method: 'POST',
        json: {
            nom: saisieNom,
            prenoms: saisiePrenom
        }
    });
}

}


//module.exports = { Service };

