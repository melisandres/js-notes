import { listeLivres } from "../../../data/listeLivres.js";
import { PanierAchat } from "./PanierAchat.js";
import GestionnaireDonnees from "./GestionnaireDonnees.js";
import { Livre } from "./Livre.js";
/**
 * Classe GestionnaireLibrairie
 * contient la liste des livres et implémente le patron Singleton
 */
export default class GestionnaireLibrairie {
    constructor(conteneurHTML) {

        if(GestionnaireLibrairie.instance == null){
            GestionnaireLibrairie.instance = this;
        }else{
            throw new Error("impossible d'instancier plus d'une fois GestionnaireLibrairie");
        }
        //"instance" is a word we choose, could be "patate"
        // On assigne l'instance à la propriété instance de la classe
        // La propriété instance est statique, elle appartient à la classe et non à l'instance
        // A faire

        this.conteneurHTML = conteneurHTML;

        // On initialise les propriétés
        this.selectionFiltre = null;
        this.listeObjetsLivres = [];
        this.listeHTML = this.conteneurHTML.querySelector("[data-liste]");

        // On initialise le panier d'achat
        // ** A faire **
        this.panierAchat = new PanierAchat();

        // On initialise la boite modale de détails de livre
        // ** A faire **

        // On initialise les valeurs et les événements
        this.init();
    }

    init() {
        // On crée un objet livre pour chaque livre de la liste
        listeLivres.forEach((element, index) => {
            // ** A faire **
        });

        // Afficher la liste des livres au chargement de la page
        this.afficherListeLivres();

        // Ajouter l'événement sur le bouton d'ajout au panier

        // Ajouter l'événement sur les filtres
    }

    onHandleClick(e) {
        //Si on clique sur le bouton d'ajout au panier, on ajoute le livre au panier
        //Si on clique ailleurs sur la liste, on affiche les détails du livre avec la modale
    }

    afficherListeLivres() {
        //On vide la liste avant d'injecter la liste

        //Afficher la liste des livres dans le HTML
        //Pour chaque livre injecter le code HTML dans la liste
        this.listeObjetsLivres.forEach((element) => {});
    }

    filtrerListeLivres(filtre, evenement) {}

    enregistrerPanier() {
        //Récupérer le contenu du panier d'achat
        //Enregistrer le panier dans session storage
    }

    chargerPanier() {
        //Charger le panier du session storage
        //Remplir le panier d'achat avec les données du session storage
        //Afficher le panier d'achat
    }
}
