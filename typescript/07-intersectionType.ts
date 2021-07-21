interface InterfazInter1 {
  prop1: string
}

interface InterfazInter2 {
  prop2: string
  prop3: string
}

type InterfazInter = InterfazInter1 & InterfazInter2

const instanciaDeInter:InterfazInter = {
  prop1: "hola1",
  prop2: "hola2",
  prop3: "hola3"
} 