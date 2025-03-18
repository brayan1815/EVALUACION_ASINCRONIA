import { solicitud } from "../helpers/solicitud.js";//se importa la funcion solicitud que esta en el archivo solicitud.js dentro de la carprta helpers.

export const getFotos=async(URL)=>{ //se exporta y se declara la funcion asincrona getFtotos, esta funcion recibe como paraemtro la variable URL
    const fotos=await solicitud(`${URL}/photos`)//se declara la constante fotos, esta almacenara el valor retornado por la funcion solicitud, a esta funcion se le pasa como argumento una cadena de texto con comillas invertidas, a esta se le interpola la URL y seguido de esto el archivo en el cual va a estar toda la informacion a solicitar. se usa await para que el programa espere a que la funcion termine de ejecutar
    return fotos; //se retorna la constante fotos.
}