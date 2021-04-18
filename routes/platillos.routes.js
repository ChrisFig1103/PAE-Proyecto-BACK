const { Router } =require('express');
const router = Router();

const platillosCtrl = require('../controllers/platillos.controller');

router.get('/',platillosCtrl.getPlatillos );
router.post('/',platillosCtrl.createPlatillo);

router.get('/:id',platillosCtrl.getPlatillo);

router.put('/:id',platillosCtrl.editPlatillo);

router.delete('/:id',platillosCtrl.deletePlatillo);

module.exports = router;