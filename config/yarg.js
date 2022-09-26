const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Número base para multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Listar tabla'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 12,
        description: 'Hasta que numero multiplicar'
    })
    .check((argv) => {
        if(isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;
