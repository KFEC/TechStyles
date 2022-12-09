const router = require('express').Router();

router.get('/about', (req, res) => {
  res.render('../../client/src/pages/About.jsx');
});


module.exports = router;