const express = require('express');
import * as bodyparser from 'body-parser';

// Initializations 
const app = express();
import './db';
import controller from './controller';
var controlador = new controller();

// Settings
app.set('port', 4000); // process.env.PORT

// Middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// Routes
app.get('/', (req, res) => res.status(200).json({'result':'Books'}));
app.get('/api/crushs', (req, res) => controlador.select(req,res));
app.get('/api/crushs/:id', (req, res) => controlador.selectOne(req,res));
app.delete('/api/crushs/:id', (req, res) => controlador.delete(req,res));
app.put('/api/crushs/:id', (req, res) => controlador.update(req,res));
app.post('/api/crushs', (req, res) => controlador.insert(req,res));


// Static Files

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})



