# Vietnamese Translations for React-Admin

Vietnamese translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-vietnamese
```

## Usage

```js
import vietnameseMessages from 'ra-language-vietnamese';

const messages = {
    'vi': vietnameseMessages,
};

<Admin locale="vi" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).