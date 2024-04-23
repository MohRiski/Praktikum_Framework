const router = require('express').Router();

router.get('/matkul', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get matkul"
    });
});

router.post('/matkul', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post matkul"
    });
});

router.put('/matkul', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put matkul"
    });
});

router.delete('/matkul', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete matkul"
    });
});

module.exports = router;