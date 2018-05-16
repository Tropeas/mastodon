/* @preval */

const fs   = require('fs');
const path = require('path');

const filtered  = {};
const filenames = fs.readdirSync(path.resolve(__dirname, '../locales'));

filenames.forEach(filename => {
  if (!filename.match(/\.json$/) || filename.match(/defaultMessages|whitelist/)) return;

  const content = fs.readFileSync(path.resolve(__dirname, `../locales/${filename}`), 'utf-8');
  const full    = JSON.parse(content);
  const locale  = filename.split('.')[0];

  filtered[locale] = {
    'notification.favourite': full['notification.favourite'],
    'notification.follow': full['notification.follow'],
    'notification.mention': full['notification.mention'],
    'notification.reblog': full['notification.reblog'],
    'notifications.group': full['notifications.group'],
  };
});

module.exports = JSON.parse(JSON.stringify(filtered));
