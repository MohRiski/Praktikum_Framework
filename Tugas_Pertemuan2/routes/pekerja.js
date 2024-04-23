const router = require('express').Router();

router.get('/pekerja', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get pekerja"
    });
});

router.post('/pekerja', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post pekerja"
    });
});

router.put('/pekerja', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put pekerja"
    });
});

router.delete('/pekerja', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete pekerja"
    });
});

module.exports = router;