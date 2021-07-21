// type functionType = (param1: number, param2: string) => void

// const probandoFType:functionType = (param1, param2) =>{

// }

type functionError = Error | null
type functionType = (error: functionError, respuesta: Object) => void
type enviarPeticion = (func:functionType) => void

const funcEnviarPeticion: enviarPeticion = (func:functionType):void => {
  if(func){
    func(new Error, {})
  }
}

funcEnviarPeticion(function(){})
// const funcEnviarPeticion = (func) => {
//   if(func){
//     func(new Error, {})
//   }
// }