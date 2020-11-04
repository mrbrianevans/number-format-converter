const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req: any, res: any) => {
  res.render('index');
});

module.exports = router;
