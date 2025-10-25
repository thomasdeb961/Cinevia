Cinevia est un projet d’intégration web développé avec Vite, HTML et SCSS. Ce site a pour objectif de proposer une interface moderne 
et intuitive inspirée des plateformes de streaming. L’utilisateur peut y découvrir des films et des séries, les ajouter à sa liste personnelle 
et naviguer entre différentes pages au design cohérent et responsive.

Pour lancer le projet, il suffit d’installer les dépendances avec la commande pnpm install, puis d’exécuter pnpm run dev pour démarrer le serveur 
de développement. La commande pnpm run build permet de générer la version de production et pnpm run dev d’en faire la prévisualisation.

L’arborescence du projet est structurée de manière claire : le dossier pages contient les différentes pages HTML (films, séries, inscription, ma liste), 
tandis que le dossier /sass regroupe les fichiers SCSS organisés en sous-dossiers (components, pages, ainsi que les fichiers mixins.scss, variables.scss et style.scss). 
Cette organisation permet une meilleure lisibilité du code et une maintenance simplifiée.

Le site comprend plusieurs pages principales : index.html, films.html, series.html, maliste.html et inscription.html. D’autres pages individuelles, 
comme f1.html, gameofthrone.html, impossible.html, lété.html, lilo.html, mercredi.html et superman.html, permettent d’accéder au détail de chaque film ou série 
lorsqu’un utilisateur clique sur une carte.

L’interface a été pensée pour être à la fois sobre et immersive. Les couleurs principales utilisées sont des nuances de bleu (#0074ff, #157BF6) pour
représenter la technologie et la modernité, du gris et du noir (#445a63, #000) pour renforcer le contraste et mettre en valeur les visuels, ainsi que 
du blanc et du doré (white, gold) pour assurer une bonne lisibilité et ajouter une touche élégante. La typographie Arial, 
simple et efficace, garantit une lecture agréable sur tous les supports. L’ensemble du site repose sur une mise en page responsive, adaptée aussi bien 
aux écrans d’ordinateurs qu’aux smartphones sachant que ce projet a eu 91/100 au niveau de SEO.

Les composants (boutons, cartes de films et séries, etc.) ont été créés avec soin pour offrir une expérience fluide et homogène. Les effets de survol, 
les transitions et la hiérarchie visuelle contribuent à une navigation agréable et intuitive.

Les fichiers SCSS sources se trouvent dans /sass/, tandis que le CSS compilé est généré automatiquement dans le dossier dist/ après la commande pnpm run build. 
Cette approche permet de séparer clairement les fichiers de développement et ceux de production.

Cinevia a été conçu comme un projet d’intégration web dans le cadre du cours d'intégration web à MyDigitalSchool, combinant rigueur technique et 
sens esthétique pour proposer une expérience utilisateur immersive et fonctionnelle.
