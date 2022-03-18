# Comment exécuter l'application

### Prérequis

1. nodeJS
2. Docker
3. npm

### Crée la base de données et les identifiants de connection

Dans le dossier ```docker``` lancer la commande ```docker compose up```

Crée un fichier ```.env``` à la racine du projet avec la variable ```MONGOLAB_URI= "mongodb://root:rootpassword@127.0.0.1:27017/?maxPoolSize=20&w=majority"```

### installer l'application et l'éxecuter

Exectuer la commande ```npm install```

Lancer le serveur avec la commande ```npm start```

> Le site serra à l'addresse http://localhost:3000/
