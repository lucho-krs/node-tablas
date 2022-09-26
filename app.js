const crearArchivo = require('./helper/multiplicar');
const argv = require('./config/yarg');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.error(err))