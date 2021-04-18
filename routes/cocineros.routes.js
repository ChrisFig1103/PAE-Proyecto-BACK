const { Router } =require('express');
const cocinerosCtrl = require('../controllers/cocineros.controller');
const router = Router();

router.get('/',cocinerosCtrl.getCocineros)

router.post('/',cocinerosCtrl.createCocinero);

router.get('/:id',cocinerosCtrl.getCocinero);

router.put('/:id',cocinerosCtrl.editCocinero);

router.delete('/:id',cocinerosCtrl.deleteCocinero);

 
module.exports = router;