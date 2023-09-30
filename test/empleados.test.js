const request = require('supertest');
const app = require('../index');

describe('Pruebas de Rutas de Empleados', () => {

  it('Obtener todos los empleados', (done) => {
    request(app)
      .get('/api/empleados')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Crear un nuevo empleado', (done) => {
    const nuevoEmpleado = {
      nombre: 'Juan Carlos Test',
      cargo: 'Arquitecto',
      departamento: 'Micro',
      sueldo: 50000,
    };

    request(app)
      .post('/api/empleados')
      .send(nuevoEmpleado)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Empleado por ID', (done) => {
    const idEmpleado = '65176b529b1ab6e3983288dc';

    request(app)
      .get(`/api/empleados/${idEmpleado}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Modificar un empleado por ID', (done) => {
    const idEmpleado = '65176b529b1ab6e3983288dc';
    const empleadoActualizado = {
      nombre: 'Empleado Editado Test',
      cargo: 'Diseñador',
      departamento: 'Diseño',
      sueldo: 60000,
    };

    request(app)
      .put(`/api/empleados/${idEmpleado}`)
      .send(empleadoActualizado)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Eliminar un empleado por ID', (done) => {
    const idEmpleado = '65176b529b1ab6e3983288dc';

    request(app)
      .delete(`/api/empleados/${idEmpleado}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

});

describe('Pruebas Negativas de Rutas de Empleados', () => {
  it('Obtener un error 404 al intentar obtener un empleado inexistente por ID', (done) => {
    const idInexistente = 'id_inexistente';

    request(app)
      .get(`/api/empleados/${idInexistente}`)
      .expect(404) // Not Found
      .expect(500) // Internal Server Error
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Obtener un error 404 al intentar editar un empleado inexistente por ID', (done) => {
    const idInexistente = '123456';
    const empleadoActualizado = {
      nombre: 'Empleado Editado',
      cargo: 'Diseñador',
      departamento: 'Diseño',
      sueldo: 60000,
    };

    request(app)
      .put(`/api/empleados/${idInexistente}`)
      .send(empleadoActualizado)
      .expect(404,done) // Not Found
      .expect(500,done) // Internal Server Error
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Obtener un error 404 al intentar eliminar un empleado inexistente por ID', (done) => {
    const idInexistente = '123456';

    request(app)
      .delete(`/api/empleados/${idInexistente}`)
      .expect(404) // Not Found
      .expect(500) // Internal Server Error
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('Obtener un error 400 al intentar crear un empleado sin proporcionar datos obligatorios', (done) => {
    const empleadoIncompleto = {};

    request(app)
      .post('/api/empleados')
      .send(empleadoIncompleto)
      .expect(400) // Not Found
      .expect(500) // Internal Server Error
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

