export function esSimboloEspecial(codigoFuente:string,control:number):Array<any>{
    let simbolosEspeciales = 
    {',':'tComa',
    '.' : 'tPunto',
    ';':'tPuntoComa',
    '(':'tParentesisAbre',
    ')':'tParentesisCierra',
    '^' : 'tPotencia',
    '+' : 'tSuma',
    '-' : 'tResta',
    '/' : 'tDivision',
    '*' : 'tProducto',
    '{':'tLlaveAbre',
    '}':'tLlaveCierra',
    '>' : 'tOpRel',
    '<' : 'tOpRel',
    '>=' : 'tOpRel',
    '<=' : 'tOpRel',
    '==' : 'tOpRel',
    '<>' : 'tOpRel',
    "=" : 'tOpAsignacion',
    "]": 'tCorcheteCierra',
    '[': 'tCorcheteAbre'
}
    let lexema = '';
    let compLex = '';
    lexema += codigoFuente[control];
    if(simbolosEspeciales.hasOwnProperty(codigoFuente[control])){
       switch (codigoFuente[control]){
            case ',':
                compLex = simbolosEspeciales[',']
            break
            case '.':
                compLex = simbolosEspeciales['.']
            break
            case ';':
                compLex = simbolosEspeciales[';']
            break
            case '(':
                compLex = simbolosEspeciales['(']
            break
            case ')':
                compLex = simbolosEspeciales[')']
            break
            case '{':
                compLex = simbolosEspeciales['{']
            break
            case '}':
                compLex = simbolosEspeciales['}']
            break
            case '^':
                compLex = simbolosEspeciales['^']
            break
            case '+':
                compLex = simbolosEspeciales['+']
            break
            case '-':
                compLex = simbolosEspeciales['-']
            break
            case '*':
                compLex = simbolosEspeciales['*']
            break
            case '/':
                compLex = simbolosEspeciales['/']
            break    
            case '>': {
                compLex = simbolosEspeciales['>']
                if (codigoFuente[control+1] == '='){
                    compLex = simbolosEspeciales['>=']
                    lexema += codigoFuente[control+1]
                    control++
                }
            }
            break
            case '<':
                compLex = simbolosEspeciales['<']
                if (codigoFuente[control+1] == '='){
                    compLex = simbolosEspeciales['<=']
                    lexema += codigoFuente[control+1]
                    control++
                } else if (codigoFuente[control+1] == '>'){
                    compLex = simbolosEspeciales['<>']
                    lexema += codigoFuente[control+1]
                    control++
                }
            break
            case '=':
                compLex = simbolosEspeciales['=']
                if (codigoFuente[control+1] == '='){
                    compLex = simbolosEspeciales['==']
                    lexema += codigoFuente[control+1]
                    control++
                }
            break      
            case ']':
                compLex = simbolosEspeciales[']']
            break
            case '[':
                compLex = simbolosEspeciales['[']
            break
        }

       return [true,control+1,lexema,compLex]
    } else {
        return [false,control]
    }
}