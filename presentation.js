function start() {
  console.log("1. Lister les clients");
  console.log("99. Sortir");

  // récupération du module `readline`
var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// récupération de la saisie utilisateur
rl.question('Saisir un nombre : ', function(saisie) {
  
  if(saisie == '1'){
    console.log('>> liste des clients');
    start();
    //require('./index');
  } else if(saisie =='99'){
    console.log('Aurevoir')
    rl.close();
  } else{
    console.log('Veuillez choisir un champ correct')  
    rl.close();
  }

});

}

exports.start = start;




