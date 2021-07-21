// function callback() {
//   console.log('ejecutado callback')
// }
// console.log('ejecutado');

// setTimeout(callback, 2000)

function saludar(saludo){
  return new Promise((resolve, reject) => {
    if (saludo === "hola") {
      setTimeout(function(){
        console.log(saludo)
        resolve(saludo)
      }, 1000)
    } else {
      reject('No saludaste con un Hola')
    }
  })
}

function ejecutarProm() {
  saludar('hola')
    .then(saludar)
    .then(saludar)
    .then(saludar)
    .catch(err => {
      throw new Error(err)
    })
}


// ejecutarProm()

async function ejecutarAsyncAwait(){
  let saludo = await saludar('hola')
  console.log('[esta es la primera]' + saludo)
  await saludar(saludo)
  await saludar(saludo)
  await saludar(saludo)
}
ejecutarAsyncAwait()
// console.log(saludar('hola'))
