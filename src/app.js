const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const app = express();
const routesProductos = require('./Routes/productos');


//middelwares

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/productos',routesProductos);


const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando al puerto ${server.address().port}`);
})

server.on('error', err => console.log(err))
