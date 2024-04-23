const router = require("express").Router();

router.get('/mahasiswa', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get mahasiswa"
    });
});

router.post('/mahasiswa', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post mahasiswa"
    });
});

router.put('/mahasiswa', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put mahasiswa"
    });
});

router.delete('/mahasiswa', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete mahasiswa"
    });
});

module.exports = router;