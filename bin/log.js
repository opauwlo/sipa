const figlet = require('figlet');
const chalk = require('chalk');
const {Signale} = require('signale');

exports.cli = () => {
  console.log(
    chalk.yellow(
      figlet.textSync('sipa', { horizontalLayout: 'full', font: 'Standard' }),
    ),
  );
};

exports.info = (data) => {
  const option = {
    types: {
      url: {
        badge: '🔸',
        color: 'yellow',
        label: 'url:',
      },
      title: {
        badge: '🔸',
        color: 'yellow',
        label: 'title:',
      },
      author: {
        badge: '🔸',
        color: 'yellow',
        label: 'author:',
      },
      folder_structure: {
        badge: '🔸',
        color: 'yellow',
        label: 'folder structure:',
      },
    },
  };

  const template = new Signale(option);
  data.url && template.url(data.url);
  data.title && template.title(data.title);
  data.author && template.author(data.author);
  data.folder_structure && template.folder_structure(data.folder_structure);
};

exports.interactive = (projectName) => {
  const interactive = new Signale({ interactive: true });
  interactive.wait('[%d / 4] - get github repositorie', 1);

  setTimeout(() => {
    interactive.start('[%d / 4] - start clone repositorie', 2);
    setTimeout(() => {
      interactive.start('[%d / 4] - complete clone', 3);
      interactive.complete(`[%d / 4] cd ${projectName}`,4);
    }, 1000);
  }, 1000);
};
