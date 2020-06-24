global.CONFIG = require('./config.js');
require('./utility.js');

let path = require('path')

let express = require('express')
let app = express()

//app.use(express.Vue(__dirname + "/staff/dist"))

try {
  let api = require(path.join(__dirname, 'api/api.js'))
  app.use('/api', api.router)
} catch(e) {
  console.log(e)
}

try { // Run the staff site
  if (CONFIG.staff) {
    let staffLib = require(path.join(CONFIG.staff, '..', 'staff.js'))
    let staffRouter = staffLib.router;
    staffRouter.use(express.Vue(CONFIG.staff))
    app.use((req, res, next) => {
      if (req.get('host').indexOf('staff') === 0) {
        staffRouter(req, res, next)
      } else {
        next()
      }
    })
  }
} catch(e) {
  console.log(e)
}

try { // Run the frontend
  if (CONFIG.frontend) {
    app.use(express.Vue(CONFIG.frontend))
  }
} catch(e) {
  console.log(e)
}

app.listen(CONFIG.port, () => {
  console.log("http://localhost:" + CONFIG.port)
})
