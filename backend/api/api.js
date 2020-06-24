let express = require('express')
let router = express.Router();


router.get('/', (req, res) => {
  res.send('hey api stuff')
})

exports.router = router;
