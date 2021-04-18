const { Router } =require('express');
const router = Router();

const mesasCtrl = require('../controllers/mesas.controller');

router.get('/',mesasCtrl.getMesas);

router.post('/',mesasCtrl.createMesa);

router.get('/:id',mesasCtrl.getMesa);

router.put('/:id',mesasCtrl.editMesa);

router.delete('/:id',mesasCtrl.deleteMesa);


module.exports = router;


