const router = require('express').Router();

router.get('/guru', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get guru"
    });
});

router.post('/guru', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post guru"
    });
});

router.put('/guru', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put guru"
    });
});

router.delete('/guru', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete guru"
    });
});

module.exports = router;