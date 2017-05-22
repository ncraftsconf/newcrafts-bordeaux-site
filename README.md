# Site web de NCrafts Bordeaux

## Mise en place de l'environnement de développement

1. Installer Ruby sur le système si ce n'est pas déjà fait
2. Installer la gem `bundler` sur le système si ce n'est pas déjà fait : `gem install bundler`
3. Installer les dépendances : `bundle install`

## Accéder au site pour le développement

`bundle exec jekyll serve --watch`

Le site est disponible à l'adresse [http://127.0.0.1:4000](http://127.0.0.1:4000).

## Déploiement

`git push` vers un repository Github Pages.
