import { promises } from 'fs';
import request, { RequestPromiseAPI } from 'request-promise-native';
import { Client } from './domains';

interface ClientBack {
    uuid: string;
    nom: string;
    prenoms: string;
}


class Service {
    
    request: RequestPromiseAPI;

    constructor() {
        this.request = request;
    }

    listerClients(): Promise<Client[]> {
        return this.request.get('https://hotelwebapi.herokuapp.com/clients?start=0&size=10', { json: true })
            .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.uuid, clientBack.nom, clientBack.prenoms)));
    }
    

findByName(nomAChercher:string): Promise<Client[]> {
    return this.request.get(`https://hotelwebapi.herokuapp.com/clients/nom=${nomAChercher}`, { json: true })
    .then((result: ClientBack[]) => result.map(clientBack => new Client(clientBack.uuid, clientBack.nom, clientBack.prenoms)));
}

posterClient(saisieNom:string, saisiePrenom:string): Promise<void> {
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


export { Service };

