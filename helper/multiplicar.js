const fs = require('fs');
require('colors');

const crearArchivo = async(numeroBase, listar, hasta) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${numeroBase} x ${i} = ${ numeroBase * i }\n`;
        }

        if (listar) {

            console.log('================================'.random);
            console.log(`Tabla del ${numeroBase}`.random);
            console.log('================================'.random);

            console.log(salida.rainbow);
            
        }

        fs.writeFileSync(`./salida/tabla-del-${numeroBase}.txt`, salida);

        return `tabla-del-${numeroBase}.txt`; 

    } catch (error) {
        throw error;
    }

} 

module.exports = crearArchivo;