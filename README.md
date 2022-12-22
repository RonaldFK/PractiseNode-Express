[![forthebadge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ronald-fonlebeck)
[![forthebadge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://forthebadge.com)


## README :


### Projet :


Le but était de partir d'un fichier JSON et d'exploiter les données afin de construire et renvoyer des pages dynamiques.

Pour cela, j'ai utilisé NodeJS avec Express pour la partie serveur ainsi que le moteur de template EJS pour le rendu dynamique.

Les marques de voitures sont classées par localisation ( usa, europe, japon).
En cliquant sur un élément, on arrive sur une page qui renvoie les modèles avec un poid identique à +/- 100kg de différence ( car sur deux modèles différent, le poid n'est jamais identique) si la localisation est identique ( cela évite de trouver des modèles en Europe si on cherche pour le japon par exemple)

### Prérequis :

```
git clone git@github.com:RonaldFK/PractiseNode-Express.git
```

### Installer les dépendances :

```bash
npm i
```

Cela installera nodeJS / Express et EJS

### Démarré le projet

```
npm start
```
