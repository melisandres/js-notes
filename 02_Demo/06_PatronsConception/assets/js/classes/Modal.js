export class LivreModal {
    constructor(conteneurHTML) {}
    init() {
        //Initialiser les propriétés
        //Ajouter les événements
        //-Au clic de la modale, cacher la modale
    }

    setHTML(infosLivre) {
        //Modifier le texte de la boite modale
    }

    afficher() {
        //Afficher la boite modale avec le CSS
        //Bloquer le scroll de la page
        //- On peut utiliser la propriété overflow: hidden; sur le body
        //- et mettre la propriété height: 100vh; sur le body
        //Ex: document.body.style.overflow = "hidden";
    }

    cacher() {
        //Cacher la boite modale avec le CSS
        //Débloquer le scroll de la page
        //Ex: document.body.style.overflow = "";
    }
}
