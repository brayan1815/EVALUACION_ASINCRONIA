import { getFotos } from "./solicitar_foto.js"; //se importa la funcion getFotos del archivo solicitar_foto.js

export const getFotosAlbum=async(URL,album)=>{//se exporta y se declara la funcion asincrona getFotosAlbum, esta funcion recibe como parametro la URL y el album
    const fotos=await getFotos(URL); //se declara la constante fotos, en esta se almacenara el retorno de la funcion getFotos, a esta funcion se le envia como argumento la variable URL, en este caso la funcion retorna todas las fotos con su respectiva informacion.
    const foto=fotos.filter((foto)=>foto.albumId==album.id);//se declara la constante foto, en esta se almacenara el retorno de la funion filter, etsa funcion se encargara de recorrer una a una las fotos y retornara unicamente las que tengan en su propiedad albumId el mismo valor la propiedad id del album
    return foto;//se retorna la constante foto.
}