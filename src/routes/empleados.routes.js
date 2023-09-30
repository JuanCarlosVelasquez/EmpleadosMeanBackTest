const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleados.controller');

router.get('/empleados', empleadoController.getEmpleados);
router.get('/empleados/:id', empleadoController.getEmpleado);
router.post('/empleados', empleadoController.createEmpleado);
router.put('/empleados/:id', empleadoController.editEmpleado);
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

module.exports = router;