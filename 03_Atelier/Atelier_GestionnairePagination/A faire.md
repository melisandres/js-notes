# Atelier cours 6 - Gestionnaire de pagination

## Tâches

Vous travaillez sur un site qui affiche les licenses valides des salles de Bingo au Québec. Comme vous connaissez maintenant les patrons de conception, vous décidez d'implémenter un gestionnaire de pagination unique pour afficher les résultats de votre recherche.

Les classes sont déjà fournies mais vous devez les modifier pour qu'elles fonctionnent correctement.

Les gestionnaires devraient implémenter le patron de conception _Singleton_ pour garantir qu'il n'existe qu'une seule instance du gestionnaireLicensesBingos dans toute l'application.

Vous devez implémenter le patron _Observer_ pour que le gestionnaire soient notifiés lors du clic de la navigation en passant l'index.

_Vous ne devez pas modifier le code HTML (et CSS) fourni, sauf pour ajouter vos fichiers JS_

### Exigences

-   Patron de conception "Singleton" : Implémentez le gestionnaire de pagination en tant que singleton pour garantir qu'il n'existe qu'une seule instance du gestionnaire dans toute l'application. Vous devez utiliser les propriétés statiques de la classe pour cela.

-   Patron de conception "Observer" : Implémentez le patron de conception "Observer" pour que les gestionnaires soient notifiés lorsqu'un changement est apporté lors du clic de la navigation. Vous devez utiliser des événements personnalisés pour cela.

## Étapes

1. Inspecter le fichier HTML et les fichiers JS fournis pour comprendre la structure de base de l'application.

2. Implémenter le patron de conception "Singleton" pour le gestionnaire de pagination.

3. Implémenter le patron de conception "Observer" pour le gestionnaire de pagination lors du changement de page.

<hr>

## Notes importantes

Cet exercice n'est pas à remettre.
