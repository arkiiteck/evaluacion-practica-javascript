// Se resuelve el reto siguiendo las intrucciones, sin embargo, en algunos puntos cambia el orden de los puntos por temas de organización de código, donde primero se decide crear las variables y posteriormente se llaman para ser imprimimidas en consola.
// 1. Clase persona con propiedades nombre, apellido y edad.
class Persona{
    // 1.2. El constructor recibe y asigna nombre, apellido y edad a los atributos internos.
    constructor(nombre,apellido,edad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
    }
    // 1.1. Crea el método getDetalles() el cual imprimirá en consola los atributos de la persona.
    getDetalles(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
    }
}
// 2. La clase jugador hereda de persona e incluye la propiedad de posición.
class Jugador extends Persona{
    // 2.2. El constructor recibe y asigna posición a los atributos internos.
    constructor(nombre,apellido,edad,posicion){
        super(nombre,apellido,edad)
        this.posicion=posicion
    }
    // 2.1. sobreescribir el método getDetalles() para que muestre en consola los detalles de persona y los de jugador.
    getDetalles(){
        super.getDetalles()
        console.log(`Posición: ${this.posicion}`)
    }
}
// 3. Clase entrenador hereda de persona y agrega años de experiencia y el id de federación.
class Entrenador extends Persona{
    // 3.2. El constructor recibe y asigna posición a los atributos internos.
    // 3.3. En el constructor configurar para que si no se recibe un id de federación este asigne un número aleatorio de 5 dígitos.
    constructor(nombre,apellido,edad,añosExperiencia,idFederacion=Math.floor(10000+Math.random()*10000)){
        super(nombre,apellido,edad)
        this.añosExperiencia=añosExperiencia
        this.idFederacion=idFederacion
    }
    // 3.1. Sobreescribir el método getDetalles() para que muestre en consola los detalles de persona y entrenador.
    getDetalles(){
        super.getDetalles()
        console.log(`Años de Experiencia: ${this.añosExperiencia}`)
        console.log(`ID Federación: ${this.idFederacion}`)
    }
}
// 4. Clase equipo tiene las propiedades de entrenador y jugadores.
class Equipo{
    // 4.1. El constructor recibe el objeto de director y un arreglo con los jugadores que pertenecen al equipo.
    constructor(entrenador,jugadores){
        this.entrenador=entrenador
        this.jugadores=jugadores
    }
    // 4.2. el método getDetalles() mostrar en consola los detalles del entrenador y de los jugadores.
    getDetalles(){
        console.log("========= Detalles del equipo =========")
        console.log("~~~~~~~~~~~~~~ Entrenador ~~~~~~~~~~~~~")
        console.log("------- Detalles del Entrenador -------")
        this.entrenador.getDetalles()
        console.log("~~~~~~~~~~~~~~ Jugadores ~~~~~~~~~~~~~~")
        this.jugadores.forEach(jugador=>{
            console.log("--------- Detalles del Jugador --------")
            jugador.getDetalles()
        })
    }
}
// 5.1. crea un arreglo de 4 jugadores con diferentes nombres, edades y posición.
jugadores=[
    new Jugador("Brahyam","Coral",22,"Portero"),
    new Jugador("Eduardo","Velez",18,"Defensa"),
    new Jugador("Daniel","Luna",19,"Medio"),
    new Jugador("Sergio","Diaz",21,"Delantero")
]
// 5.2. crea un objeto de tipo entrenador con su nombre, edad y años de experiencia.
entrenador=new Entrenador("Roberto","Sánchez",45,20)
// 5.3. crea un equipo con los objetos de entrenador y estudiantes demostrando el funcionamiento de jerarquía.
equipo=new Equipo(entrenador,jugadores)
equipo.getDetalles()