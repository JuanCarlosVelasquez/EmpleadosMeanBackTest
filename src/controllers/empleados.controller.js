const Empleado = require('../models/Empleado');
const empleadoRepository = require('../repositories/empleados.repository');

exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await empleadoRepository.getAllEmpleados();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los empleados.' });
  }
};

exports.getEmpleado = async (req, res) => {
  try {
    const empleado = await empleadoRepository.getEmpleadoById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado.' });
    }
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el empleado.' });
  }
};

exports.createEmpleado = async (req, res) => {
  const { nombre, cargo, departamento, sueldo } = req.body;
  const nuevoEmpleado = new Empleado({ nombre, cargo, departamento, sueldo });

  try {
    const empleado = await empleadoRepository.createEmpleado(nuevoEmpleado);
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el empleado.' });
  }
};

exports.editEmpleado = async (req, res) => {
  const { nombre, cargo, departamento, sueldo } = req.body;
  const empleadoActualizado = { nombre, cargo, departamento, sueldo };

  try {
    const empleado = await empleadoRepository.updateEmpleadoById(req.params.id, empleadoActualizado);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado.' });
    }
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al editar el empleado.' });
  }
};

exports.deleteEmpleado = async (req, res) => {
  try {
    const empleado = await empleadoRepository.deleteEmpleadoById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado.' });
    }
    res.status(200).json({ mensaje: 'Empleado eliminado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el empleado.' });
  }
};