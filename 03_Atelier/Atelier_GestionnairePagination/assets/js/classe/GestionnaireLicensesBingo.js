import { listeLicencesBingo } from "../data/listeLicensesBingo.js";

export default class GestionnaireLicencesBingo {
    #conteneur;
    #listeLicences;

    constructor(conteneur) {
        // Implémentation du patron de conception singleton
        if (GestionnaireLicencesBingo.instance == null) {
            GestionnaireLicencesBingo.instance = this;
        } else {
            throw new Error("Vous ne pouvez pas créer une autre instance de GestionnaireLicencesBingo");
        }
        this.#conteneur = conteneur;
        this.#listeLicences = listeLicencesBingo;

        this.afficherLicenses = this.afficherLicenses.bind(this);
        this.init();
    }

    init() {
        // Implémentation du patron de conception observateur
        // Initialisation de l'écouteur d'événement personnalisé.
        // Si quelqu'un envoie un événement "changementPage", on va appeler la méthode afficherLicenses
        // Le numéro de la page à afficher est passé dans l'objet "detail" de l'événement
    }

    afficherLicenses(evenement) {
        const page = evenement.detail.page;
        const license = this.#listeLicences[page - 1];

        this.#conteneur.innerHTML = `
        <div>
            <h1>${license.Titulaire}</h1>
            <p>${license.Lieux[0].Nom}</p>
            <p>${license.Lieux[0].Ville}</p>
            <p>${license.Debut}</p>
            <p>${license.Fin}</p>
        </div>
        `;
    }
}
