# Instalacje

node -v
v20.9.0

npm -v
10.1.0

git --version
git version 2.40.1.windows.1

code -v
v 1.88

# GIT

git clone https://bitbucket.org/ev45ive/sages-mtu-angular.git

F1 -> Clone -> Paste -> clone from URL -> location -> open

npm i
npm start

# Extensions

https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh
https://angular.dev/tools/devtools

Angular Language Service
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

Angular 10 Snippets - Mikael Morlund
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode

Prettier
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Paste JSON as Code - quicktype
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktyp

# Angular

npm i -g @angular/cli

SCSS

npm i -g @angular/cli@17^

ng version
ng help
ng new --help

ng new mtu --directory "." --standalone false --routing --style scss
ng new mtu --directory "." --standalone false

# Schematic / Generator
ng g --help
ng g component --help
ng g module --help

ng g m --help

ng g m  playlists -m app --routing --route "playlists"
ng g c playlists/containers/playlists-view

ng g c playlists/components/playlists-list
ng g c playlists/components/playlists-details
ng g c playlists/components/playlists-editor


# Flex + Grid

http://www.flexboxdefense.com/

https://flexboxfroggy.com/

https://cssgridgarden.com/


# Shared 
ng g m shared -m playlists


# Virtualize
https://material.angular.io/components/table/overview

https://material.angular.io/cdk/scrolling/overview#virtual-scrolling

https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API