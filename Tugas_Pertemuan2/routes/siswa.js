const router = require('express').Router();

router.get('/siswa', (_,res) =>{
    res.json({
        status: true,
        message: 'ini method get siswa'
    });
});

router.post('/siswa', (_,res) =>{
    res.json({
        status: true,
        message: 'ini method post siswa'
    });
});

router.put('/siswa', (_,res) =>{
    res.json({
        status: true,
        message: 'ini method put siswa'
    });
});

router.delete('/siswa', (_,res) =>{
    res.json({
        status: true,
        message: 'ini method delete siswa'
    })
});

module.exports = router;