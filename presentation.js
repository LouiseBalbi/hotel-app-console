const readline = require('readline');
//var service = require("./service.js");

// création d'un objet `rep` permettant de récupérer la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Presentation {


    constructor(service) {
        this.monService = service;
    }

    start() {


    console.log("Menu");
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("3. Recherche un client par nom");
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log("99. Sortir");

    rl.question('Saisissez un nombre :', saisie => {

        switch (saisie) {
            case "1":
                console.log('>> Liste des Clients')
                this.monService.listerClients()
                .then(listClients => console.log(
                    listClients
                        .map(client => `${client.nom} ${client.prenoms}`)
                        .join('\n')
                ))
                .catch(err => console.log(err))
                .finally(() => {
                    console.log("\r");
                    this.start();
                })

            break;

            case "2":
                console.log("\n>> Ajouter un client\n");
                rl.question("Entrez un Nom : ", saisieNom => {
                    rl.question("Entrez un Prenom : ", saisiePrenom => {
                        this.monService.posterClient(saisieNom, saisiePrenom)
                            .then(console.log(`${saisieNom} ${saisiePrenom} a été ajouté !`))
                            .catch(err => console.log(err))
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

            //     rl.question("Entrez le Nom à chercher: ", saisieNom => {
            //         this.monService.findByName(saisieNom)
            //             .then(clients => console.log(clients))
            //             .catch(err => console.log(err))
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

//exports.start = start;
module.exports = { Presentation };