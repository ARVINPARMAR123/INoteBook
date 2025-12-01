const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   obj= {
    title: 'My first note',
    description: 'This is the description of my first note',
    tag: 'personal'
   }
    res.json(obj);
})

module.exports = router;