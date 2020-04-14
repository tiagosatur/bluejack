# Blue Jack App

This is a frontend challenge where the user can to input some card values and the app outputs the high card and all full house combinations.

## Features

- Home page: game explanation and route to new pile page
- New pile page: register rotation card and cards piles into the Api
- View pile page: See the registered cards pile reordered based on the rotation card, see the full house combinations

## Stack

- Vue
- Vuex
- Vue Router
- Bootstrap Vue
- Axios
- Sass

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### API

It was used the [Deck of Cards API](https://deckofcardsapi.com/)

### Known API Bugs

- Sometimes the API did not register all sent cards see the [printscreen](https://prnt.sc/ryn54k), and consequently when the user tries to see (list) the results, they are not there.
- Sometimes no card was added, [see the print](https://prnt.sc/ryntfu)
