export class Livre {
    constructor(donneesLivre, index) {
        //Comme il n'y a pas de base de données, on doit créer un index pour chaque livre
        //Cet index sera utilisé pour identifier le livre dans le panier d'achat
        //Et récupérer les informations du livre dans la liste des livres
        this.index = index;

        this.titre = donneesLivre.titre;
        this.auteur = donneesLivre.auteur;
        this.categorie = donneesLivre.categorie;
        this.nouveaute = donneesLivre.nouveaute;
        this.prix = donneesLivre.prix;
        // ... Reste des infos du livre à ajouter

        this.init();
    }

    init() {
        this.injecterHTML();
    }

    injecterHTML() {
        //Ce code n'est pas complet, vous devez vous l'approprier en fonction de votre projet
        //Vous pouvez utiliser les attributs data-* pour stocker des informations dans le HTML
        //Ex: data-index-livre, data-categorie, data-nouveaute, etc.
        //Le CSS doit être adapté en conséquence
        const livreHTML = `
                        <div class="item" data-index-livre="${this.index}" data-categorie="${this.categorie}" data-nouveaute="${this.nouveaute}">
                            <h3>${this.titre}</h3>
                            <h4>${this.auteur}</h4>
                            <div class="btn" data-btn-ajouter><p>Ajouter au panier</p></div>
                        </div>`;

        //On injecte le HTML dans la liste du gestionnaire de librairie
    }

    afficherDetails() {
        //Afficher les détails du livre dans la modale
    }
}
