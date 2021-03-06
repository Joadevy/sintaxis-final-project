var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { obtenerSiguienteCompLex } from '../Analizador Lexico/index.js';
import { tablaSimbolos } from '../Analizador Lexico/tablaSimbolos.js';
import { mostrarInfo } from '../Analizador Lexico/index.js';
// Esta funcion hara el manejo del compilador completo.
export function interprete(archivo) {
    return __awaiter(this, void 0, void 0, function* () {
        // codigoFuente va a guardar toda la cadena, es decir, todo el codigo del programa.
        //.trim() para remover espacios en blanco al nodoCompLex y al final del archivo.
        let codigoFuente = (yield archivo.text()).trim();
        let control = 0;
        let compLex = '';
        // Llamo a la funcion para obtener el compLex
        while (compLex !== 'pesos' && compLex !== 'errorLexico') {
            let nodoCompLex = obtenerSiguienteCompLex(codigoFuente, control, tablaSimbolos);
            compLex = nodoCompLex[0];
            control = nodoCompLex[1];
            // Mostrar en la interfaz la data del resultado.
            mostrarInfo(nodoCompLex);
        }
    });
}
