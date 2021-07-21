//?variables
//?hoisting
//?scope
//?referencias
//?spread
//?destructuracion
//
// let a = "hola"
// function saludar(params) {
//   let a = params
//   return a
// }
// let param = this.a
// console.log(saludar(param))

// const obj = {
//   a : "perro",
//   // b: function() {
//   //   console.log(this.a)
//   // },
//   b: this.a
// }

// console.log(obj.b)
// obj.b()
// const obj = {
//   a: "perro",
//   b: function(){
//     console.log(this.a)
//   },
//   c: ()=> {
//     console.log(this.a)
//   }
// }

// console.log(obj.a)
// console.log(obj.b())

// let obj = {a: 2, b: 1}
// let obj2 = obj
// let obj3 = { ...obj }
// obj.a = 4
// console.log(obj)
// console.log(obj2)
// console.log(obj3)

const objPersonas = {
  ciudad : "arequipa", 
  pais: "peru", 
  ingles: {
    c1: "c1",
    c2: "c2",
  },
  usuarios: [
    {
      user: "tony",
    },
    {
      user: "bel",
    },
    {
      user: "lili",
    },
    {
      user: "roma",
    },
    {
      user: "lufa",
    }
  ]
}
// console.log(objDes.c.c1)
// console.log(objDes.a, objDes.b, objDes.c, objDes.c.c1, objDes.c.c2)
// objPersonas.usuarios.forEach(function(item) {
//   console.log(item.user)
// })
// let nombre = objPersonas.usuarios[1].user
// let ciudad = objPersonas.ciudad
// let pais = objPersonas.pais
// let ingles = objPersonas.ingles.c1
let {
  usuarios, 
  ciudad,
  pais,
  ingles:{
    c1
  }
} = objPersonas

usuarios.forEach(({user}) => {
  // console.log(item)
  // console.log(`${item.user} vive en ${ciudad}-${pais}, ingles ${c1}`)
  console.log(`${user} vive en ${ciudad}-${pais}, ingles ${c1}`)
}) 