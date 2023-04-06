const router = require('express').Router() //calling express in from the node modules
const path = require('path')

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
// the home route has to be last because it needs to match all of them
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router //export so we can use it 

