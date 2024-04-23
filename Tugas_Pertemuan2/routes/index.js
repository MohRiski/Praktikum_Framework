const router = require('express').Router();

router.get('/', (_, res) =>{
    res.json({
        status: true,
        message: 'ini method get'
    });
});

router.post('/', (_, res) =>{
    res.json({
        status: true,
        message: 'ini method post'
    });
});

router.put('/', (_, res) =>{
    res.json({
        status: true,
        message: 'ini method put'
    });
});

router.delete('/', (_,res) =>{
    res.json({
        status: true,
        message: 'ini method delete'
    });
});

module.exports = router;