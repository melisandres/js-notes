import GestionnaireLibrairie from "./classes/GestionnaireLibrairie.js";
//import GestionnaireDonnees from "./classes/GestionnaireDonnees.js";

(function () {
    //initialiser le Gestionnaire de librairie
    new GestionnaireLibrairie(document.querySelector("[data-librairie]"));



    //tests d'enregistrement local
/*     const animaux = {
        "chien": "woof",
        "chat": "meow", 
        "humain" : ["allo", "aurevoir"]
    }

    GestionnaireDonnees.enregistrerDonneesLocales("patate","valeur");
    GestionnaireDonnees.enregistrerDonneesLocales("donnees", animaux);

    const obj = GestionnaireDonnees.recupererDonneesLocales();
    console.log(obj); */
})();
