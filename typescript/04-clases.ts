class Persona{ 
  // private restringe el acceso a un atributo de clase
  private nombre: string
  // public apellido:string
  private apellido:string
  constructor(nombre: string, apellido: string){
    this.nombre = nombre;
    this.apellido = apellido;
  }
  getNombre():string{
    return this.nombre
  }
  getApellido():string{
    return this.apellido
  }
  setNombre(nombre:string):void{
    this.nombre = nombre;
  }
  setApellido(apellido:string):void{
    this.apellido = apellido;
  }

}

const personaNueva:Persona = new Persona("Juan", "Peres")
const nombreCompleto:string = personaNueva.getNombre() + ' ' + personaNueva.getApellido() //Juan Peres

class Usuario extends Persona {
  private email:string
  private pass:number
  constructor(nombre: string, apellido: string, email:string, pass:number){
    super(nombre, apellido)
    this.email = email;
    this.pass = pass;
  }
  getEmail():string{
    return this.email
  }
  getPass():number{
    return this.pass
  }
  setEmail(email:string):void{
    this.email = email;
  }
  setPass(pass:number):void{
    this.pass = pass;
  }
}

const usuarioClase:Usuario = new Usuario("Fernando", "Martinez", "fer@fer.com", 1234)
usuarioClase.getApellido()
usuarioClase.getEmail()