let config = require('./config.js');
let express = require('express');
let fs = require('fs');
let path = require('path');

const GREEN = '\u001b[32m'; // ANSI coloring
const RESET = '\u001b[0m'; // ANSI coloring reset

let app = express();

app.use(express.static(config.dist));
let index = fs.readFileSync(path.join(config.dist, "index.html")).toString(); // Read index file into memory

app.use((req, res, next) => { // History mode single page application.
  res.send(index); // All routing logic is handled through here
  // This misses out on many logic routes that will be specified by backend.
  // I recommend just linking the backend to this installation and running that for production.
});

app.listen(config.port, () => { // Listen on the config.js port.
  console.log(`Serving ${config.dist} on ${GREEN}http://localhost:${config.port}${RESET}`)
});
