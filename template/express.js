// eslint-disable-next-line import/prefer-default-export
module.exports = [
  {
    url: 'https://github.com/opauwlo/sipa.git',
    title: 'js-express-mongodb-mvc',
    folder_structure: `
    api-boilerplate
    ┣ __tests__
    ┃ ┣ integration
    ┃ ┃ ┗ main.spec.js
    ┃ ┗ unit
    ┣ src
    ┃ ┣ configs
    ┃ ┃ ┣ database.config.js
    ┃ ┃ ┗ server.config.js
    ┃ ┣ controllers
    ┃ ┃ ┣ delete.controller.js
    ┃ ┃ ┣ get.controller.js
    ┃ ┃ ┣ post.controller.js
    ┃ ┃ ┗ put.controller.js
    ┃ ┣ middlewares
    ┃ ┃ ┗ verifyJwtToken.js
    ┃ ┣ models
    ┃ ┃ ┗ exemple.js
    ┃ ┣ routes
    ┃ ┃ ┗ routes.js
    ┃ ┣ utils
    ┃ ┃ ┗ verifyIsAdmin.js
    ┃ ┗ main.js
    ┣ .editorconfig
    ┣ .eslintrc.json
    ┣ .gitignore
    ┣ ex.env
    ┣ package.json
    ┗ yarn.lock`,
    author: 'opauwlo',
  },
];
