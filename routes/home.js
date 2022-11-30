const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        return res.send(`This may be the home route, but it's not the route you're looking for!`);
    }
    )

module.exports = router;