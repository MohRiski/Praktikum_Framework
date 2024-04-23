const router = require('express').Router();

router.get('/nilai', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get nilai"
    });
});

router.post('/nilai', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post nilai"
    });
});

router.put('/nilai', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put nilai"
    });
});

router.delete('/nilai', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete nilai"
    });
});

module.exports = router;