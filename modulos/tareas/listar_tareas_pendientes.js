import { solicitar_tareas } from "./solicitar_tareas.js" //se importa la funcion soliictar tareas que se encuentra en el archivo soliictar_tareas.js

export const solicitar_tareas_pendientes_user=async(URL,user)=>{ //se exporta y se declara la funcion asincrona soliictar_tareas_pendientes_user, esta funcion recibe ccomo argumentos la variable URL y la variable user
    const tareas=await solicitar_tareas(URL);//se declra la constante tareas, en esta se almacenara el valor retornado por la funcion solicitar_tareas, en este caso retornara todas las tareas con su informacion, a esta funcion se le pasan como parametros la variable URL. se usa await para que el programa espere a que la funcion se termine de ejecutar
    const tareas_pend_user= tareas.filter((tarea)=>tarea.completed==false && tarea.userId==user.id); //se declara la constante tareas_pend_user, en esta se almacenara el retorno de la funcion filter, la funcion filter se encaragra de recorrer una a una las tareas y retornar unicamente las que en su su propiedad completed sea true y en su propiedad userId sea igual a la propiedad id del user.
    return tareas_pend_user; //se retorna la contsnate tareas_pemd_user
}