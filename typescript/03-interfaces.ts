type DNI = number
type edad = number
type word = string

interface PersonaInterfaz{
  nombre: string
  edad: edad
  dni: DNI
  apellido: word
  altura?:number
  peso?: number
}

const persona1:PersonaInterfaz = {
  nombre:'Sobon',
  edad: 50,
  dni: 10,
  apellido: 'lezama',
  // altura: 1.7,
  // peso: 80
}


interface Pokemon {
  name: string
  url: string
  tipo?: string
}

const pokemon1:Pokemon = {
  name: 'charmander',
  url: 'http://',
  // otro: ''
}
const pokemon2:Pokemon = {
  name: 'squirtle',
  url: 'http://',
  tipo: 'agua'
  // otro: ''
}

const datos = [
  {    
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/"
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/"
  },
  {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/"
  },
  {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/"
  },
  {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/"
  },
  {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/"
  },
  {
    name: "wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/"
  },
]

let pokemones:Pokemon[] = datos.map((pokemon:Pokemon):Pokemon => {
  return pokemon
})

let pokemones2:string[] = datos.map((pokemon:Pokemon):string => {
  return pokemon.name
})

let urls:string[] = datos.map((pokemon:Pokemon):string => {
  return pokemon.url
}) 