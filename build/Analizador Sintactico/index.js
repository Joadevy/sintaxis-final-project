var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { nodo, Arbol } from "./manejoArbol.js";
import { creaTAS, cargarTAS, variables, terminales } from "./TAS.js";
import { tablaSimbolos as TS } from "../Analizador Lexico/tablaSimbolos.js";
import { obtenerSiguienteCompLex } from "../Analizador Lexico/index.js";
import { crearPila, Apilar, Desapilar } from "./manejoPila.js";
// Testing con DENO
// @ts-ignore
// import { creaTAS,cargarTAS,variables, terminales } from "./TAS.ts";
// @ts-ignore
// import {elementoPila, crearPila, Apilar, Desapilar} from "./manejoPila.ts" 
// @ts-ignore
//  import { nodo, Arbol, simboloGramatical} from "./manejoArbol.ts";
// @ts-ignore
// import { tablaSimbolos as TS} from "../Analizador Lexico/tablaSimbolos.ts";
// @ts-ignore
// import { obtenerSiguienteCompLex } from "../Analizador Lexico/index.ts"; 
const arrayVariables = ['vPROGRAMA', 'vCUERPO', 'vSENTENCIAS', 'vSENTENCIA', 'vDECLARACION', 'vVARIABLES', 'vVARIABLE', 'vASIGNACION', 'vEXPARIT', 'vIZQARIT', 'vRAIZPOT', 'vPOT', 'vSUMARESTA', 'vMULTDIV', 'vOPERANDOS', 'vLECTURA', 'vESCRITURA', 'vSALIDAS', 'vSAUX', 'vSALIDA', 'vCONDICIONAL', 'vCONDICIONALFACT', 'vMIENTRAS', 'vCONDICION', 'vIZQCOND', 'vNEGACION', 'vCONJUNCION', 'vDISYUNCION'];
const arrayTerminales = ['tPrograma', 'tEscribir', 'tVariables', 'tLeer', 'tWhile', 'tIf', 'tElse', 'tAnd', 'tOr', 'tNot',
    'tId', 'tCadena', 'tConstReal', 'tPuntoComa', 'tComa', 'tOpRel', 'tOpAsignacion', 'tSuma', 'tResta', 'tProducto', 'tDivision', 'tPotencia', 'tRaiz',
    'tParentesisAbre', 'tParentesisCierra', 'tLlaveAbre', 'tLlaveCierra', 'tCorcheteAbre', 'tCorcheteCierra'];
function inicializarPila(pila, raiz) {
    pila = crearPila();
    let simboloInicial = {
        simbolo: "vPROGRAMA",
        arbolPila: raiz
    };
    let finDeCadena = {
        simbolo: 'pesos'
    };
    Apilar(pila, finDeCadena);
    Apilar(pila, simboloInicial);
    return pila;
}
export function analisisSintactico(codigoFuente, raiz) {
    var _a, _b, _c, _d;
    let exito = false;
    let errorLog = '';
    let control = 0;
    let lexema = '';
    let compLex; // tiene que ser de tipo simboloGramatical
    let TAS = creaTAS();
    let pila = crearPila();
    let tablaSimbolos = TS; // Igual a la que importamos (esto es para poder ir actualizandola)
    cargarTAS(TAS);
    pila = inicializarPila(pila, raiz);
    let nodoCompLex = obtenerSiguienteCompLex(codigoFuente, control, tablaSimbolos);
    compLex = nodoCompLex[0]; // Guarda el compLex devuelto por el analizador lexico.
    lexema = nodoCompLex[2]; // Guarda el lexema devuelto por el analizador lexico.
    tablaSimbolos = nodoCompLex[3];
    control = nodoCompLex[1];
    console.log('compLex encontrado: ' + compLex);
    console.log('lexema encontrado: ' + lexema);
    console.log('tabla de simbolos ' + JSON.stringify(tablaSimbolos));
    let x;
    while (compLex !== 'errorLexico' && !exito) {
        x = Desapilar(pila); // Obtengo un elemento de la pila de elementos a encontrar en el programa.
        // console.log(x)
        if (arrayTerminales.includes(x.simbolo)) {
            console.log(x.simbolo + ' es terminal');
            // console.log(x.simbolo,compLex)
            if (x.simbolo == compLex) {
                if (x.arbolPila) {
                    x.arbolPila.lexema = lexema; // Si es distinto de undefined, lo asigna (esta comprobacion es por ts)
                }
                // Llama de nuevo al analizador lexico para seguir el reconocimiento.
                nodoCompLex = obtenerSiguienteCompLex(codigoFuente, control, tablaSimbolos);
                compLex = nodoCompLex[0];
                tablaSimbolos = nodoCompLex[3];
                lexema = nodoCompLex[2];
                control = nodoCompLex[1];
                console.log('Se obtuvo el elemento: ' + compLex);
            }
        }
        else if (arrayVariables.includes(x.simbolo)) {
            console.log(x.simbolo + ' es una variable');
            let posicion1 = variables[x.simbolo];
            // console.log('prim posicion: ' + posicion1)
            let posicion2 = terminales[compLex];
            // console.log('segunda posicion ' + posicion2)
            if (TAS[posicion1][posicion2] === undefined) {
                errorLog = '<< TAS no definida para ' + x.simbolo + ' hacia ' + compLex + ' >>';
                console.log('TAS NO DEFINIDA PARA ' + x.simbolo + ' HACIA ' + compLex);
                compLex = 'errorLexico';
            }
            else {
                let contador = 0;
                let cantidad = TAS[posicion1][posicion2].cantidad - 1;
                while (contador <= cantidad) { // Mientras el contador sea menor que la cantidad de elementos en la part derecha de la CFG
                    let compL = TAS[posicion1][posicion2].elementos[contador]; // Guardo el elemento del array que contiene todos los elementos d la parte derecha.
                    let hijo = new nodo(compL, '', 0, []);
                    (_a = x.arbolPila) === null || _a === void 0 ? void 0 : _a.insertarHijo(hijo);
                    console.log('Nuevo nodo en el arbol ' + compL);
                    contador++;
                }
                while (cantidad >= 0) {
                    if ((_b = x.arbolPila) === null || _b === void 0 ? void 0 : _b.hijos[cantidad].simbolo) {
                        let y = {
                            simbolo: (_c = x.arbolPila) === null || _c === void 0 ? void 0 : _c.hijos[cantidad].simbolo,
                            arbolPila: (_d = x.arbolPila) === null || _d === void 0 ? void 0 : _d.hijos[cantidad],
                        };
                        Apilar(pila, y);
                    }
                    cantidad--;
                }
                // console.log(pila)
            }
        }
        if (x.simbolo == compLex && compLex == 'pesos') {
            exito = true;
        }
    }
    if (exito) {
        console.log('Sintaxis correcta');
        raiz.mostrarArbol(raiz, '');
        mostrarInfoSintactico([true], raiz);
    }
    else {
        mostrarInfoSintactico([false, errorLog], raiz);
        console.log('Hay un error sintactico');
    }
}
// Esto se tiene que hacer dentro del analizador (la parte del arbol)
// const raiz = new nodo('vPROGRAMA','',0,[]);
// const arbol = new Arbol(raiz)
// analisisSintactico('Program test{var letra12,variable,identificador,ast45; identificador = 1234 ; while[identificador>35]{identificador=124+10; if[identificador>100]{identificador=RAIZ 150}}}',arbol)
export function analizadorSintactico(archivo) {
    return __awaiter(this, void 0, void 0, function* () {
        // codigoFuente va a guardar toda la cadena, es decir, todo el codigo del programa.
        //.trim() para remover espacios en blanco al nodoCompLex y al final del archivo.
        let codigoFuente = (yield archivo.text()).trim();
        const raiz = new nodo('vPROGRAMA', '', 0, []);
        const arbol = new Arbol(raiz);
        analisisSintactico(codigoFuente, arbol);
    });
}
// analizadorSintactico('Program{var uno identificador = 1234 ; var dos,tres; while[identificador==35]{identificador=124+10; if[identificador>100]{ identificador = (((((150+noDeberiaAceptarEsto}}}')
function mostrarInfoSintactico(resultado, raiz) {
    let output = document.getElementById('output');
    if (resultado[0]) { // En caso de que haya resultado en exito el analizador sintactico.
        let text = document.createElement('p');
        text.classList.add('output-text');
        text.innerHTML = `No hay errores sintacticos, revisa la consola (F12 en el teclado) para ver el arbol sintactico.`;
        raiz.mostrarArbolConsola(raiz, '');
        if (output) {
            output.appendChild(text);
            output.classList.add('output-show');
        }
    }
    else {
        if (output) {
            let text = document.createElement('p');
            text.classList.add('output-text');
            text.innerHTML = `Ocurrio un <span class="error">error sintactico.</span> Log: <span class="complex">${resultado[1]}</span>`;
            output.appendChild(text);
            output.classList.add('output-show');
        }
    }
}
