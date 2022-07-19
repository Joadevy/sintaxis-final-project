// export type variables = 'vPROGRAMA' | 'vCUERPO'| 'vSENTENCIAS' | 'vSENTENCIA' | 'vDECLARACION' | 'vVARIABLES' | 'vVARIABLE' | 'vASIGNACION' | 'vEXPARIT' | 'vIZQARIT' | 'vRAIZPOT' | 'vPOT' | 'vSUMARESTA' | 'vMULTDIV' | 'vOPERANDOS' | 'vLECTURA' | 'vESCRITURA' | 'vSALIDAS' | 'vSAUX' | 'vSALIDA' | 'vCONDICIONAL' | 'vCONDICIONALFACT' | 'vMIENTRAS' | 'vCONDICION' | 'vIZQCOND' | 'vNEGACION' | 'vCONJUNCION' | 'vDISYUNCION' ;
// export type terminales = 'tPrograma' | 'tEscribir' | 'tVariables' | 'tLeer' | 'tWhile' | 'tIf' | 'tElse' | 'tAnd' | 'tOr' | 'tNot' | 
// 'tId' | 'tCadena' | 'tConstReal' | 'tPuntoComa' | 'tComa' | 'tOpRel' | 'tOpAsignacion' | 'tMas' | 'tMenos' | 'tProducto' | 'tDivision' |'tPotencia' | 'tRaiz' | 
// 'tParentesisAbre' | 'tParentesisCierra' | 'tLlaveAbre' | 'tLlaveCierra' | 'tCorcheteAbre' | 'tCorcheteCierra';
//import { simboloGramatical } from "./manejoArbol";
var variables;
(function (variables) {
    variables[variables["vPROGRAMA"] = 0] = "vPROGRAMA";
    variables[variables["vCUERPO"] = 1] = "vCUERPO";
    variables[variables["vSENTENCIAS"] = 2] = "vSENTENCIAS";
    variables[variables["vSENTENCIA"] = 3] = "vSENTENCIA";
    variables[variables["vDECLARACION"] = 4] = "vDECLARACION";
    variables[variables["vVARIABLES"] = 5] = "vVARIABLES";
    variables[variables["vVARIABLE"] = 6] = "vVARIABLE";
    variables[variables["vASIGNACION"] = 7] = "vASIGNACION";
    variables[variables["vEXPARIT"] = 8] = "vEXPARIT";
    variables[variables["vIZQARIT"] = 9] = "vIZQARIT";
    variables[variables["vRAIZPOT"] = 10] = "vRAIZPOT";
    variables[variables["vPOT"] = 11] = "vPOT";
    variables[variables["vSUMARESTA"] = 12] = "vSUMARESTA";
    variables[variables["vMULTDIV"] = 13] = "vMULTDIV";
    variables[variables["vOPERANDOS"] = 14] = "vOPERANDOS";
    variables[variables["vLECTURA"] = 15] = "vLECTURA";
    variables[variables["vESCRITURA"] = 16] = "vESCRITURA";
    variables[variables["vSALIDAS"] = 17] = "vSALIDAS";
    variables[variables["vSAUX"] = 18] = "vSAUX";
    variables[variables["vSALIDA"] = 19] = "vSALIDA";
    variables[variables["vCONDICIONAL"] = 20] = "vCONDICIONAL";
    variables[variables["vCONDICIONALFACT"] = 21] = "vCONDICIONALFACT";
    variables[variables["vMIENTRAS"] = 22] = "vMIENTRAS";
    variables[variables["vCONDICION"] = 23] = "vCONDICION";
    variables[variables["vIZQCOND"] = 24] = "vIZQCOND";
    variables[variables["vNEGACION"] = 25] = "vNEGACION";
    variables[variables["vCONJUNCION"] = 26] = "vCONJUNCION";
    variables[variables["vDISYUNCION"] = 27] = "vDISYUNCION";
})(variables || (variables = {}));
var terminales;
(function (terminales) {
    terminales[terminales["tPrograma"] = 0] = "tPrograma";
    terminales[terminales["tEscribir"] = 1] = "tEscribir";
    terminales[terminales["tVariables"] = 2] = "tVariables";
    terminales[terminales["tLeer"] = 3] = "tLeer";
    terminales[terminales["tWhile"] = 4] = "tWhile";
    terminales[terminales["tIf"] = 5] = "tIf";
    terminales[terminales["tElse"] = 6] = "tElse";
    terminales[terminales["tAnd"] = 7] = "tAnd";
    terminales[terminales["tOr"] = 8] = "tOr";
    terminales[terminales["tNot"] = 9] = "tNot";
    terminales[terminales["tId"] = 10] = "tId";
    terminales[terminales["tCadena"] = 11] = "tCadena";
    terminales[terminales["tConstReal"] = 12] = "tConstReal";
    terminales[terminales["tPuntoComa"] = 13] = "tPuntoComa";
    terminales[terminales["tComa"] = 14] = "tComa";
    terminales[terminales["tOpRel"] = 15] = "tOpRel";
    terminales[terminales["tOpAsignacion"] = 16] = "tOpAsignacion";
    terminales[terminales["tMas"] = 17] = "tMas";
    terminales[terminales["tMenos"] = 18] = "tMenos";
    terminales[terminales["tProducto"] = 19] = "tProducto";
    terminales[terminales["tDivision"] = 20] = "tDivision";
    terminales[terminales["tPotencia"] = 21] = "tPotencia";
    terminales[terminales["tRaiz"] = 22] = "tRaiz";
    terminales[terminales["tParentesisAbre"] = 23] = "tParentesisAbre";
    terminales[terminales["tParentesisCierra"] = 24] = "tParentesisCierra";
    terminales[terminales["tLlaveAbre"] = 25] = "tLlaveAbre";
    terminales[terminales["tLlaveCierra"] = 26] = "tLlaveCierra";
    terminales[terminales["tCorcheteAbre"] = 27] = "tCorcheteAbre";
    terminales[terminales["tCorcheteCierra"] = 28] = "tCorcheteCierra";
})(terminales || (terminales = {}));
/* type celda = {
  'elementos': Array<simboloGramatical>,
  'cantidad': 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 // Hasta la maxima cantidad de partes derechas de la CFG (que son 8 por CONDICIONAL)
} */
export function creaTAS() {
    const cantidadVariables = 28; // Defino la cantidad de variables que tiene la CFG para crear la TAS.
    let TAS = [];
    // Creando cada subArray para cargar los datos en la tabla
    for (let celdas = 0; celdas < cantidadVariables; celdas++) {
        TAS.push([]);
    }
    return TAS;
}
// Cada celda sera donde estaran los elementos que hay que derivar (parte derecha de la CFG), cantidad es el length de elementos.
class celda {
    constructor(elemento) {
        this.elementos = elemento;
        this.cantidad = elemento.length;
    }
}
function cargaEProduccionesTAS(TAS) {
    // Si el length es 0, significa que es epsilon. Si el length > 0 hay derivacion, y si es un error lexico, la celda contieen undefined.
    TAS[variables.vSENTENCIAS][terminales.tLlaveCierra] = new celda([]);
    TAS[variables.vVARIABLE][terminales.tLlaveCierra] = new celda([]);
    TAS[variables.vVARIABLE][terminales.tPuntoComa] = new celda([]);
    TAS[variables.vPOT][terminales.tLlaveCierra] = new celda([]);
    TAS[variables.vPOT][terminales.tParentesisCierra] = new celda([]);
    TAS[variables.vPOT][terminales.tPuntoComa] = new celda([]);
    TAS[variables.vPOT][terminales.tComa] = new celda([]);
    TAS[variables.vPOT][terminales.tCorcheteCierra] = new celda([]);
    TAS[variables.vPOT][terminales.tMas] = new celda([]);
    TAS[variables.vPOT][terminales.tMenos] = new celda([]);
    TAS[variables.vPOT][terminales.tProducto] = new celda([]);
    TAS[variables.vPOT][terminales.tDivision] = new celda([]);
    TAS[variables.vPOT][terminales.tCorcheteCierra] = new celda([]);
    TAS[variables.vPOT][terminales.tOpRel] = new celda([]);
    TAS[variables.vPOT][terminales.tAnd] = new celda([]);
    TAS[variables.vPOT][terminales.tOr] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tLlaveCierra] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tParentesisCierra] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tPuntoComa] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tComa] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tCorcheteCierra] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tOpRel] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tAnd] = new celda([]);
    TAS[variables.vSUMARESTA][terminales.tOr] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tLlaveCierra] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tParentesisCierra] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tPuntoComa] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tComa] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tMas] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tMenos] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tCorcheteCierra] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tOpRel] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tAnd] = new celda([]);
    TAS[variables.vMULTDIV][terminales.tOr] = new celda([]);
    TAS[variables.vSAUX][terminales.tParentesisCierra] = new celda([]);
    TAS[variables.vCONDICIONALFACT][terminales.tLlaveCierra] = new celda([]);
    TAS[variables.vCONDICIONALFACT][terminales.tPuntoComa] = new celda([]);
    TAS[variables.vCONJUNCION][terminales.tCorcheteCierra] = new celda([]);
    TAS[variables.vDISYUNCION][terminales.tCorcheteCierra] = new celda([]);
    return TAS;
}
export function cargarTAS(TAS) {
    TAS = cargaEProduccionesTAS(TAS); // Primero carga todas las epsilon producciones.
    // Cargando cada celda de la TAS de acuerdo a la construida a partir de la CFG.
    TAS[variables.vPROGRAMA][terminales.tPrograma] = new celda(['tPrograma', 'tId', 'tCorcheteAbre', 'vCUERPO', 'tCorcheteCierra']);
    TAS[variables.vCUERPO][terminales.tId] = new celda(['vSENTENCIA', 'vSENTENCIAS']);
    TAS[variables.vCUERPO][terminales.tVariables] = new celda(['vSENTENCIA', 'vSENTENCIAS']);
    TAS[variables.vCUERPO][terminales.tLeer] = new celda(['vSENTENCIA', 'vSENTENCIAS']);
    TAS[variables.vCUERPO][terminales.tEscribir] = new celda(['vSENTENCIA', 'vSENTENCIAS']);
    TAS[variables.vCUERPO][terminales.tIf] = new celda(['vSENTENCIA', 'vSENTENCIAS']);
    TAS[variables.vCUERPO][terminales.tWhile] = new celda(['vSENTENCIA', 'vSENTENCIAS']);
    TAS[variables.vSENTENCIAS][terminales.tPuntoComa] = new celda(['tPuntoComa', 'vCUERPO']);
    TAS[variables.vSENTENCIA][terminales.tId] = new celda(['vASIGNACION']);
    TAS[variables.vSENTENCIA][terminales.tVariables] = new celda(['vDECLARACION']);
    TAS[variables.vSENTENCIA][terminales.tLeer] = new celda(['vLECTURA']);
    TAS[variables.vSENTENCIA][terminales.tEscribir] = new celda(['vESCRITURA']);
    TAS[variables.vSENTENCIA][terminales.tIf] = new celda(['vCONDICIONAL']);
    TAS[variables.vSENTENCIA][terminales.tWhile] = new celda(['vMIENTRAS']);
    TAS[variables.vDECLARACION][terminales.tVariables] = new celda(['tVariables', 'vVARIABLES']);
    TAS[variables.vVARIABLES][terminales.tId] = new celda(['tId', 'vVARIABLE']);
    TAS[variables.vVARIABLE][terminales.tComa] = new celda(['tComa', 'vVARIABLES']);
    TAS[variables.vASIGNACION][terminales.tId] = new celda(['tId', 'tOpAsignacion', 'vEXPARIT']);
    TAS[variables.vEXPARIT][terminales.tId] = new celda(['vIZQARIT', 'vSUMARESTA']);
    TAS[variables.vEXPARIT][terminales.tParentesisAbre] = new celda(['vIZQARIT', 'vSUMARESTA']);
    TAS[variables.vEXPARIT][terminales.tRaiz] = new celda(['vIZQARIT', 'vSUMARESTA']);
    TAS[variables.vEXPARIT][terminales.tMenos] = new celda(['vIZQARIT', 'vSUMARESTA']);
    TAS[variables.vEXPARIT][terminales.tConstReal] = new celda(['vIZQARIT', 'vSUMARESTA']);
    TAS[variables.vIZQARIT][terminales.tId] = new celda(['vRAIZPOT', 'vMULTDIV']);
    TAS[variables.vIZQARIT][terminales.tParentesisAbre] = new celda(['vRAIZPOT', 'vMULTDIV']);
    TAS[variables.vIZQARIT][terminales.tRaiz] = new celda(['vRAIZPOT', 'vMULTDIV']);
    TAS[variables.vIZQARIT][terminales.tMenos] = new celda(['vRAIZPOT', 'vMULTDIV']);
    TAS[variables.vIZQARIT][terminales.tConstReal] = new celda(['vRAIZPOT', 'vMULTDIV']);
    TAS[variables.vRAIZPOT][terminales.tId] = new celda(['vOPERANDOS', 'vPOT']);
    TAS[variables.vRAIZPOT][terminales.tParentesisAbre] = new celda(['vOPERANDOS', 'vPOT']);
    TAS[variables.vRAIZPOT][terminales.tRaiz] = new celda(['tRaiz', 'tParentesisAbre', 'vEXPARIT', 'tParentesisCierra', 'vPOT']);
    TAS[variables.vRAIZPOT][terminales.tMenos] = new celda(['vOPERANDOS', 'vPOT']);
    TAS[variables.vRAIZPOT][terminales.tConstReal] = new celda(['vOPERANDOS', 'vPOT']);
    TAS[variables.vPOT][terminales.tProducto] = new celda(['tProducto', 'vOPERANDOS']);
    TAS[variables.vSUMARESTA][terminales.tMas] = new celda(['tMas', 'vOPERANDOS', 'vSUMARESTA']);
    TAS[variables.vSUMARESTA][terminales.tMenos] = new celda(['tMenos', 'vOPERANDOS', 'vSUMARESTA']);
    TAS[variables.vMULTDIV][terminales.tProducto] = new celda(['tProducto', 'vOPERANDOS', 'vMULTDIV']);
    TAS[variables.vMULTDIV][terminales.tDivision] = new celda(['tDivision', 'vOPERANDOS', 'vMULTDIV']);
    TAS[variables.vOPERANDOS][terminales.tId] = new celda(['tId']);
    TAS[variables.vOPERANDOS][terminales.tParentesisAbre] = new celda(['tParentesisAbre', 'vEXPARIT', 'tParentesisCierra']);
    TAS[variables.vOPERANDOS][terminales.tMenos] = new celda(['tMenos', 'vOPERANDOS']);
    TAS[variables.vOPERANDOS][terminales.tConstReal] = new celda(['tConstReal']);
    TAS[variables.vLECTURA][terminales.tLeer] = new celda(['tLeer', 'tParentesisAbre', 'tCadena', 'tComa', 'tId']);
    TAS[variables.vESCRITURA][terminales.tEscribir] = new celda(['tEscribir', 'tParentesisAbre', 'vSALIDAS', 'tParentesisCierra']);
    TAS[variables.vSALIDAS][terminales.tId] = new celda(['vSALIDA', 'vSAUX']);
    TAS[variables.vSALIDAS][terminales.tParentesisAbre] = new celda(['vSALIDA', 'vSAUX']);
    TAS[variables.vSALIDAS][terminales.tRaiz] = new celda(['vSALIDA', 'vSAUX']);
    TAS[variables.vSALIDAS][terminales.tMenos] = new celda(['vSALIDA', 'vSAUX']);
    TAS[variables.vSALIDAS][terminales.tConstReal] = new celda(['vSALIDA', 'vSAUX']);
    TAS[variables.vSALIDAS][terminales.tCadena] = new celda(['vSALIDA', 'vSAUX']);
    TAS[variables.vSAUX][terminales.tComa] = new celda(['tComa', 'vSALIDAS']);
    TAS[variables.vSALIDA][terminales.tId] = new celda(['vEXPARIT']);
    TAS[variables.vSALIDA][terminales.tParentesisAbre] = new celda(['vEXPARIT']);
    TAS[variables.vSALIDA][terminales.tRaiz] = new celda(['vEXPARIT']);
    TAS[variables.vSALIDA][terminales.tMenos] = new celda(['vEXPARIT']);
    TAS[variables.vSALIDA][terminales.tConstReal] = new celda(['vEXPARIT']);
    TAS[variables.vSALIDA][terminales.tCadena] = new celda(['tCadena']);
    TAS[variables.vCONDICIONAL][terminales.tIf] = new celda(['tIf', 'tCorcheteAbre', 'vCONDICION', 'tCorcheteCierra', 'tLlaveAbre', 'vCUERPO', 'tLlaveCierra', 'vCONDICIONALFACT']);
    TAS[variables.vCONDICIONALFACT][terminales.tElse] = new celda(['tElse', 'tLlaveAbre', 'vCUERPO', 'tLlaveCierra']);
    TAS[variables.vMIENTRAS][terminales.tWhile] = new celda(['tWhile', 'tCorcheteAbre', 'vCONDICION', 'tCorcheteCierra', 'tLlaveAbre', 'vCUERPO', 'tLlaveCierra']);
    TAS[variables.vCONDICION][terminales.tId] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vCONDICION][terminales.tParentesisAbre] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vCONDICION][terminales.tRaiz] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vCONDICION][terminales.tMenos] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vCONDICION][terminales.tConstReal] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vCONDICION][terminales.tCorcheteAbre] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vCONDICION][terminales.tNot] = new celda(['vIZQCOND', 'vDISYUNCION']);
    TAS[variables.vIZQCOND][terminales.tId] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vIZQCOND][terminales.tParentesisAbre] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vIZQCOND][terminales.tRaiz] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vIZQCOND][terminales.tMenos] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vIZQCOND][terminales.tConstReal] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vIZQCOND][terminales.tCorcheteAbre] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vIZQCOND][terminales.tNot] = new celda(['vNEGACION', 'vCONJUNCION']);
    TAS[variables.vNEGACION][terminales.tId] = new celda(['vEXPARIT', 'tOpRel', 'vEXPARIT']);
    TAS[variables.vNEGACION][terminales.tParentesisAbre] = new celda(['vEXPARIT', 'tOpRel', 'vEXPARIT']);
    TAS[variables.vNEGACION][terminales.tRaiz] = new celda(['vEXPARIT', 'tOpRel', 'vEXPARIT']);
    TAS[variables.vNEGACION][terminales.tMenos] = new celda(['vEXPARIT', 'tOpRel', 'vEXPARIT']);
    TAS[variables.vNEGACION][terminales.tConstReal] = new celda(['vEXPARIT', 'tOpRel', 'vEXPARIT']);
    TAS[variables.vNEGACION][terminales.tCorcheteAbre] = new celda(['tCorcheteAbre', 'vCONDICION', 'tCorcheteCierra']);
    TAS[variables.vNEGACION][terminales.tNot] = new celda(['tNot', 'vNEGACION']);
    TAS[variables.vCONJUNCION][terminales.tAnd] = new celda(['tAnd', 'vNEGACION', 'vCONJUNCION']);
    TAS[variables.vDISYUNCION][terminales.tOr] = new celda(['tOr', 'vIZQCOND', 'vDISYUNCION']);
    return TAS;
}
// Testeando
let TAS = creaTAS();
TAS = cargarTAS(TAS);
console.log(TAS);
console.log(TAS[variables.vCUERPO][terminales.tId].elementos);
console.log(TAS[variables.vPOT][terminales.tCadena] === undefined); // SIgnifica que hay error lexico, no hay derivacion posible (no hay nada en la celda)
console.log(TAS[variables.vPOT][terminales.tOr].cantidad);