export default class Pagination {
    constructor(listeObjets, conteneur) {
        this.page = 1;
        this.nbItemsParPage = 1;
        this.listeObjets = listeObjets;
        this.nbPages = Math.ceil(this.listeObjets.length / this.nbItemsParPage);
        this.conteneur = conteneur;

        this.init();
        this.gererClic = this.gererClic.bind(this);
    }

    init() {
        //Valeur par défaut au chargement de la page
        this.allerALaPage(1);
    }

    //Afficher la page en fonction du numéro de page
    allerALaPage(page) {
        this.page = page;

        // Implémentation du patron de conception observateur
        // Le numéro de la page à afficher est passé dans l'objet "detail" de l'événement

        this.genererPagination();
    }

    //Afficher les items de la page courante
    getItemsPageCourante() {
        const indexDebut = (this.page - 1) * this.nbItemsParPage;
        return this.listeObjets.slice(indexDebut, indexDebut + this.nbItemsParPage);
    }

    genererPagination() {
        this.conteneur.innerHTML = "";

        //Créer les éléments de la pagination
        const pagination = `
            <div class="pagination">
                <a href="#" data-action="precedent" data-page="${+this.page - 1}">&laquo;</a>

                <a class="active" href="#" data-page="${this.page}">${this.page}</a>
                
                <a href="#" data-action="suivant" data-page="${+this.page + 1}">&raquo;</a>
            </div>`;

        this.conteneur.insertAdjacentHTML("beforeend", pagination);

        const liens = this.conteneur.querySelectorAll("a");

        liens.forEach((lien) => {
            lien.addEventListener("click", this.gererClic);
        });
    }

    gererClic(evenement) {
        evenement.preventDefault();

        const lien = evenement.currentTarget;
        const action = lien.dataset.action;
        const page = lien.dataset.page;

        //Si la page est plus grande que le nombre de pages ou plus petite que 1, on ne fait rien
        if (page > this.nbPages || page < 1) {
            return; //On sort de la fonction, le reste du code ne sera pas exécuté
        }

        this.allerALaPage(parseInt(page));
    }
}
