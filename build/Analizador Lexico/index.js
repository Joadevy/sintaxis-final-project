var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { esConstReal } from '../Analizador Lexico/Automatas/constanteReal.js';
// @ts-ignore
// import {esConstReal} from '../Analizador Lexico/Automatas/constanteReal.ts';
import { esSimboloEspecial } from '../Analizador Lexico/Automatas/simboloEspecial.js';
// @ts-ignore
// import {esSimboloEspecial} from '../Analizador Lexico/Automatas/simboloEspecial.ts';
import { esIdentificador } from '../Analizador Lexico/Automatas/identificador.js';
// @ts-ignore
// import {esIdentificador} from '../Analizador Lexico/Automatas/identificador.ts';
import { esCadena } from '../Analizador Lexico/Automatas/cadena.js';
// @ts-ignore
// import {esCadena} from '../Analizador Lexico/Automatas/cadena.ts';
import { tablaSimbolos } from '../Analizador Lexico/tablaSimbolos.js';
// @ts-ignore
// import {tablaSimbolos} from '../Analizador Lexico/tablaSimbolos.ts';
export function mostrarInfo(resultado) {
    let output = document.getElementById('output');
    if (output) {
        if (resultado) {
            let text = document.createElement('p');
            text.classList.add('output-text');
            if (resultado[0] == "errorLexico") {
                text.innerHTML = ` Se encontro el compLex: <span class="error">${resultado[0]}</span>`;
            }
            else if (resultado[0] == "pesos") {
                text.innerHTML = ` Se encontro el compLex: <span class="complex">${resultado[0]}</span> y representa el fin de archivo.`;
            }
            else {
                text.innerHTML = ` Se encontro el compLex: <span class="complex">${resultado[0]}</span> y el lexema asociado es <span class="lexema">${resultado[2]}</span>`;
            }
            output.appendChild(text);
            output.classList.add('output-show');
        }
        else {
            alert('Ha ocurrido un error, intentalo de nuevo.');
        }
    }
}
export function obtenerSiguienteCompLex(codigoFuente, control, tablaSimbolos) {
    // Aca habria que hacer el manejo general del analizador lexico
    let compLex;
    // Asigna [1,2, ... , 32] que son los ASCII a saltear en el archivo
    let evitarASCII = [...Array(33).keys()].slice(1);
    // Si  caracter del codigo fuente es distinto de un caracter de control, avanza control.
    while (evitarASCII.includes(codigoFuente.charCodeAt(control))) {
        control++;
    }
    if (control == codigoFuente.length) {
        // Devuelve el componente lexico que representa el fin de archivo.
        compLex = "pesos";
    }
    else if (esConstReal(codigoFuente, control)[0]) {
        // Se necesita devolver un array que contenga el lexema, el componente lexico y el control
        let resultado = esConstReal(codigoFuente, control); // Guarda el resultado (devuelve un array [true,control,lexema])
        compLex = "tConstReal";
        return [compLex, resultado[1], resultado[2], tablaSimbolos];
    }
    else if (esSimboloEspecial(codigoFuente, control)[0]) {
        let resultado = esSimboloEspecial(codigoFuente, control); // Guarda el resultado (devuelve un array [true,control,lexema,compLex]
        return [resultado[3], resultado[1], resultado[2], tablaSimbolos];
    }
    else if (esIdentificador(codigoFuente, control)[0]) {
        let resultado = esIdentificador(codigoFuente, control); // Guarda el resultado (devuelve un array [true,control,lexema,compLex]
        if (!tablaSimbolos.hasOwnProperty(resultado[2].toUpperCase())) {
            compLex = 'tId';
            // Insertar el identificador en la tabla de simbolos (luego de convertirlo a mayusculas)
            tablaSimbolos[resultado[2].toUpperCase()] = 'tId';
        }
        else {
            // Si esta en la tabla de simbolos, buscamos cual es el componente lexico asociado.
            compLex = tablaSimbolos[resultado[2].toUpperCase()];
        }
        return [compLex, resultado[1], resultado[2], tablaSimbolos];
    }
    else if (esCadena(codigoFuente, control)[0]) {
        let resultado = esCadena(codigoFuente, control); // Guarda el resultado (devuelve un array [true,control,lexema,compLex]
        compLex = 'tCadena';
        return [compLex, resultado[1], resultado[2], tablaSimbolos];
    }
    else {
        compLex = "errorLexico";
    }
    return [compLex];
}
export function analizadorLexico(archivo) {
    return __awaiter(this, void 0, void 0, function* () {
        // codigoFuente va a guardar toda la cadena, es decir, todo el codigo del programa.
        //.trim() para remover espacios en blanco al nodoCompLex y al final del archivo.
        let codigoFuente = (yield archivo.text()).trim();
        // Aca se debe declarar las variables para manejar el string codigoFuente (control,lexema)
        let control = 0;
        let compLex = '';
        // Llamo a la funcion para obtener el compLex
        while (compLex !== 'pesos' && compLex !== 'errorLexico') {
            let nodoCompLex = obtenerSiguienteCompLex(codigoFuente, control, tablaSimbolos);
            // Actualizando la variable de control y compLex con la salida del analizador lexico.
            compLex = nodoCompLex[0];
            control = nodoCompLex[1];
            // Mostrar en la interfaz la data del resultado.
            mostrarInfo(nodoCompLex);
        }
    });
}
