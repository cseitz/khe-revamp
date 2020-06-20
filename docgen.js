const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

jsdoc2md.render({
  files: 'backend/*.js',
}).then(md => {
  fs.writeFileSync("backend/JSDOC.md", md);
})

jsdoc2md.render({
  files: 'frontend/*.js',
}).then(md => {
  fs.writeFileSync("frontend/JSDOC.md", md);
})
