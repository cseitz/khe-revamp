// Various global functions and variables that are useful throughout the backend

let express = require('express')
let historyApiFallback = require('express-history-api-fallback')
express.Vue = function(folder) {
  let router = express.Router()
  router.use(express.static(folder))
  router.use(historyApiFallback('index.html', {
    root: folder,
  }))
  return router
}
