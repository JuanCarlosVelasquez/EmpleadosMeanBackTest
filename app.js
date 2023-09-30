const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.set('puerto',process.env.PORT|| 3000); 
app.set('nombreApp','Gestión de empleados'); 

const apiRoutes = require('./src/routes/empleados.routes');

const connectDB = require('./database'); 

app.use(morgan('dev'));

app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);

export async function createServer() {
    return express();
  }
  
  async function startServer(){
    let app = await createServer();
    await app.listen({ port: 3000 });
    console.log("Server has started!");
  }
  
  if(process.env.NODE_ENV ==="dev") startServer();

module.exports = app;
module.exports = server;