express = require('express');
router = express.Router();
DAO = require('../DAO/produtos')

router.get('v1/fotos', () => {
    const dao = new DAO();
    return dao.Get();
});

