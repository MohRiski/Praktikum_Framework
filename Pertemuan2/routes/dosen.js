const router = require('express').Router();

router.get('/dosen', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get dosen"
    });
});

router.post('/dosen', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post dosen"
    });
});

router.put('/dosen', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put dosen"
    });
});

router.delete('/dosen', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete dosen"
    });
});

module.exports = router;