// let telefono:string | number = "12345"
type telefono = string | number
let telefono:telefono = 12345
type resultadoSoC = string | number
type parametroSoC = string | number

function SumarOConcatenar(param1: parametroSoC, param2: parametroSoC ):resultadoSoC {
  // NO deja sumar cuando son diferentes tipos de dato
  let result = Number(param1) + Number(param2)
  return result
  // return String(param1) + (param2)
  // return Number(param1) + Number(param2)
}

interface Interfaz1 {
  prop1: string
}

interface Interfaz2 {
  prop2: string
}

type InterfazUnion = Interfaz1 | Interfaz2

const instanciaDeUnion:InterfazUnion = {
  prop1: "hola1",
  prop2: "hola2",
  // prop3: "hola3"
} 