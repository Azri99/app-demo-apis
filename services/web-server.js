const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));

router.get('/', async (req, res)=>{
    const result = {
        message : 'It work',
    };
    res.json(result);  
});

module.exports = router;