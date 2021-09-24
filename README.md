# s'ipa your boilerplate (framework in the future) for Node.js api's

![GitHub repo size](https://img.shields.io/github/repo-size/opauwlo/sipa?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/opauwlo/sipa?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/opauwlo/sipa?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/opauwlo/sipa?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/opauwlo/sipa?style=for-the-badge)

<img src="https://i.ibb.co/9YTQpVj/Peek-2021-09-22-18-03.gif" alt="gif show how this work">

> s'ipa is a boilerplate for creating api's in nodejs, in the future with your help we hope it will be a framework. Just below you will see the folder structure created by sipas

```
📦s'ipa
 ┣ 📂__tests__
 ┃ ┣ 📂integration
 ┃ ┃ ┗ 📜main.spec.js
 ┃ ┗ 📂unit
 ┣ 📂src
 ┃ ┣ 📂configs
 ┃ ┃ ┣ 📜database.config.js
 ┃ ┃ ┗ 📜server.config.js
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜delete.controller.js
 ┃ ┃ ┣ 📜get.controller.js
 ┃ ┃ ┣ 📜post.controller.js
 ┃ ┃ ┗ 📜put.controller.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┗ 📜verifyJwtToken.js
 ┃ ┣ 📂models
 ┃ ┃ ┗ 📜exemple.js
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜routes.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜verifyIsAdmin.js
 ┃ ┗ 📜main.js
 ┣ 📜.editorconfig
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜ex.env
 ┣ 📜package.json
 ┗ 📜yarn.lock
```
### Adjustments and improvements

The project is still under development and future updates will focus on the following tasks:

- [x] Add a cli for creating 
- [ ] Add Yarn or Npm option
- [ ] Add More Templates


## 💻 Prerequisites

Before starting, make sure you have met the following requirements:

* You have installed the latest version of `Node.JS`.

  ``` for install node.js go to ``` [Node.js Site](https://nodejs.org/en/) ``` and follow the instructions for your SO.```
  
* You have installed the classic stable: version of `Yarn`.

  ``` for install Yarn go to ``` [Yarn Classic Site](https://classic.yarnpkg.com/lang/en/) ``` and follow the instructions for your SO.```
  
* You have installed `GIT`.

  ``` for install GIT go to ``` [GIT Site](https://git-scm.com/) ``` and follow the instructions for your SO.```
  
 * You have read `this readme.md`.

## 🚀 Installing (cloning) s'ipa

To clone s'ipa, follow these steps:

Linux, macOS and windows:
```
git clone blabla <your project name>
```

## ☕ Using s'ipa

To use s'ipa, follow these steps after install:

```
cd <your project name>
```
---
```
yarn i
```
---
```
yarn dev
```
## 🧪 Tests
We are using jest to perform the tests, to test the tests (funny) just run ``` yarn test``` inside your project

## 📫 Contributing to s'ipa

Para contribuir com s'ipa, siga estas etapas:

1. Fork this repository.
2. Create a branch: `git checkout -b <name_branch>`.
3. Make your changes and confirm then: `git commit -m '<message_commit>'`
4. send to original branch: `git push origin sipa / <local>`
5. Create the pull request.

Alternatively, consult the GitHub documentation [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## 😄 Be one of the contributors <br>

```js
{
    url: '<repo_url>',
    name: '<repo_name>',
    author: '<your_name>',
    description: '<repo_desc>'
}
```

## 📝 License

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.



## 💳 License

[MIT](LICENSE)
