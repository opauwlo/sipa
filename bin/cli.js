#!/usr/bin/env node

const inquirer = require('inquirer');
const path = require('path');
const { readdir } = require('fs').promises;
const clone = require('git-clone');
const log = require('./log.js');


const inputProjectName = () => new Promise((resolve, reject) => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'project',
      message: 'you project name: ',
      default: 'sipa-api',
    },
  ])
    .then((result) => {
      resolve({
        project: result.project.replace(/\s+/g, '-').toLowerCase(),
      });
    })
    .catch((error) => {
      reject(error);
    });
});

const selectedFramework = () => new Promise(async (resolve, reject) => {
  let framework = await readdir(path.join(__dirname, '../template'), { withFileTypes: true });
  framework = framework.filter((p) => !p.isDirectory()).map((p) => (p.name).replace('.js', '').replace(/\b[a-z]/, (letter) => letter.toUpperCase()));

  inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'now select project freamework: ',
      choices: framework,
    },
  ])
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
});

const selectedTemplate = (framework) => new Promise((resolve, reject) => {
  const template = require(`../template/${framework.toLowerCase()}`).map((template) => template.title);

  inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: `the framework you choose is ${framework}. Select the template that you want: `,
      choices: template,
    },
  ])
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
});

const getTemplateInfo = (framework, template) => {
  const data = require(`../template/${framework.toLowerCase()}`).find((t) => t.title === template);
  log.info(data);
  return data;
};

const decideTemplate = (template) => new Promise((resolve, reject) => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'decide',
      message: `would you like to decide with the ${template} template ?`,
    },
  ])
    .then((result) => {
      resolve(result.decide);
    })
    .catch((error) => {
      reject(error);
    });
});

const cloneProject = (project, template) => new Promise((resolve, reject) => {
  try {
    const projectName = project === 'selected-template-name' ? 'sipa-api' : project;
    clone(template.url, `./${projectName}`);
    log.interactive(projectName);
    resolve();
  } catch (error) {
    reject(error);
  }
});

const createProject = async () => {
  try {
    log.cli();
    let decide; let
      info;
    const { project } = await inputProjectName();

    do {
      const { framework } = await selectedFramework();
      const { template } = await selectedTemplate(framework);
      info = await getTemplateInfo(framework, template);
      decide = await decideTemplate(template);
    } while (!decide);

    await cloneProject(project, info);
  } catch (error) {
    console.error(error);
  }
};
createProject();
