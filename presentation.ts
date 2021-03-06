import { Service } from "./service";
import readline from 'readline';
import { Client } from './domains';

//const readline = require('readline');

const monService = new Service();

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export class Presentation {

    monService: Service;

    constructor(service: Service) {
        this.monService = service;
    }

    start() {


    console.log("Menu");
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Recherche un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir");

    rl.question('Saisissez un nombre :', (saisie: string) => {

        switch (saisie) {
            case "1":
                console.log('>> Liste des Clients')
                monService.listerClients()
                .then(listClients => console.log(
                    listClients
                        .map(client => client.toString())
                        .join('\n')
                ))
                .catch((err: string) => console.log(err))
                .finally(() => {
                    console.log("\r");
                    this.start();
                })

            break;

            case "2":
                console.log("\n>> Ajouter un client\n");
                rl.question("Entrez un Nom : ", (saisieNom: string) => {
                    rl.question("Entrez un Prenom : ", (saisiePrenom: string) => {
                        this.monService.posterClient(saisieNom, saisiePrenom)
                            .then(() => console.log(`${saisieNom} ${saisiePrenom} a été ajouté !`))
                            .catch((err: any) => console.log(err))
                            .finally(() => {
                                console.log("\r");
                                this.start();
                            })
                    })
                })

                break;

                // revoir côté java
                // case "3":
                //     console.log("\n>> Rechercher un client par nom\n");

                //     rl.question("Entrez le Nom à chercher: ", (saisieNom: string) => {
                //         monService.findByName(saisieNom)
                //             .then((clients: Client[]) => console.log(
                //                 clients
                //                     .map(client => client.toString())
                //                     .join('\n')
                //             ))
                //             .catch((err: string) => console.log(err))
                //             .finally(() => {
                //                 console.log("\r");
                //                 this.start();
                //             })
                //     })
                //     break;

            case "99":
                console.log("Aurevoir.")
                //rep.close();
                process.exit(); // Met fin au programme
                //break;
              default :
                  console.log('Veuillez saisir un champ correct')
                  this.start();
        }

    }
    );

}
}


//module.exports = { Presentation };
