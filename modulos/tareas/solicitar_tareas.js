import { solicitud } from "../helpers/solicitud.js"//se importa la funcio solicitud que se encuentra en el archivo solicitud.js dentro de la carpeta helpers
    
export const solicitar_tareas=async(URL)=>{ //se exporta y se declara la funcion asincrona solicitar_tareas, esta funcion recibe como parametro la variable URL
    const tareas= await solicitud(`${URL}/todos`);//se declara la constante tareas, esta almacenara el valor retornado por la funcion solicitud, a esta funcion se le pasa como argumento una cadena de texto con comillas invertidas, a esta se le interpola la URL y seguido de esto el archivo en el cual va a estar toda la informacion a solicitar. se usa await para que el programa espere a que la funcion termine de ejecutar
    return tareas; //se retorna la constante tareas.
}