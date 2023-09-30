const Empleado = require('../models/Empleado');

exports.getAllEmpleados = async () => {
  return await Empleado.find();
};

exports.getEmpleadoById = async (id) => {
  return await Empleado.findById(id);
};

exports.createEmpleado = async (empleado) => {
  return await empleado.save();
};

exports.updateEmpleadoById = async (id, empleadoActualizado) => {
  return await Empleado.findByIdAndUpdate(id, empleadoActualizado, { new: true });
};

exports.deleteEmpleadoById = async (id) => {
  return await Empleado.findByIdAndRemove(id);
};