const router = require('express').Router();

router.get('/mapel', (_,res) =>{
    res.json({
        status: true,
        message: "ini method get mapel"
    });
});

router.post('/mapel', (_,res) =>{
    res.json({
        status: true,
        message: "ini method post mapel"
    });
});

router.put('/mapel', (_,res) =>{
    res.json({
        status: true,
        message: "ini method put mapel"
    });
});

router.delete('/mapel', (_,res) =>{
    res.json({
        status: true,
        message: "ini method delete mapel"
    });
});

module.exports = router;