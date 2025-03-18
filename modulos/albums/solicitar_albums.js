import { solicitud } from "../helpers/solicitud.js";//se importa la funcion soliictud que se encuentra dentro del archivo solicitud.js en la carpeta helpers

export const getAlbums=async(URL)=>{//se exporta y se declara la funcion asincrona getAlbums, esta funcion recibe como parametro la constante URL.
    const albums=await solicitud(`${URL}/albums`) //se declara la constante albums, esta almacenara el retorno de la funcion solicitud, a esta funcion se le pasa como arguemnto una cadena de texto con comillas invertidas, en esta cadena se interpola va variable URL, seguido a esto va el nombre del archivo en el cual se encuentra toda la informacion de los albums, en este caso la funcion solicitud retornara toda la informacion de los albums. se usa await para que el programa espere a que la funcion termine sus jecucion
    return albums;//se retorna la constante albums
}