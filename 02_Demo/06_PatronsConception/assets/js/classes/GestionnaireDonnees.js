export default class GestionnaireDonnees {
    // fonction statique disponible partout sans avoir à faire new
    //LocalStorage
    static enregistrerDonneesLocales(cle, valeur) {
        const chaine = JSON.stringify(valeur);
        localStorage.setItem(cle, chaine);
    }
        

    static recupererDonneesLocales(cle) {
        const chaineEnregistree = localStorage.getItem(cle);
        const objConverti = JSON.parse(chaineEnregistree);

        return objConverti;
    }

    static supprimerDonneesLocales(cle) {
        localStorage.removeItem(cle);
    }

    static supprimerToutesDonneesLocales() {
        localStorage.clear();
    }

    //SessionStorage
    static enregistrerDonneesSession(cle, valeur) {}

    static recupererDonneesSession(cle) {}

    static supprimerDonneesSession(cle) {}

    static supprimerToutesDonneesSession() {}
}
