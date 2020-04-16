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

## Images

![Ordered pile cards](https://i.ibb.co/Gx7hZt9/screen01.png "Ordered pile cards")

![Ordered pile result](https://i.ibb.co/3CJW7Z2/screen02.png "Ordered pile result")

## Installing

```
yarn install
```

### Running

```
yarn serve
```

## Testing

```
yarn run test
```

### Building

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
