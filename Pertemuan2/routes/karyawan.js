const router = require('express').Router();

router.get('/karyawan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get karyawan"
    });
});

router.post('/karyawan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post karyawan"
    });
});

router.put('/karyawan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put karyawan"
    });
});

router.delete('/karyawan', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete karyawan"
    });
});

module.exports = router;