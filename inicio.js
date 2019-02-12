
module.exports = {
    historia : function(nombre, edad, cabello){
        if (edad > 18 && edad < 80) {
            return `Esta es una historia llena de tragedias y desdichas, porque ${nombre} tiene ${edad} ,es decir, es mayor de edad`
        }
        else if (edad > 90){
            return `Al pasar los años llenos de vivencias y experiencias, ${nombre} se dio cuenta que había vivido lo suficiente como para ser un gran mentor de los novatones`
        }else{
        return "Hola, me llamo " + nombre + " y tengo " + edad + " creo que tengo el cabello " + cabello  
        }  
    }
}

