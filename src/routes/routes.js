'use strict'

const {Router} = require('express');

const router = Router();

router.get('/login', (req, res) => {
    res.json(
        {
            user: "user",
            pass: "pass"
        }
    )
})

module.exports = router;