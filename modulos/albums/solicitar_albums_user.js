import { getAlbums } from "./solicitar_albums.js" //se importa la funcion getAlbums que se encuentra dentro del archico solicitar_albums.js

export const getAlbumsUser=async(URL,usuario)=>{ //se exporta y se declara la funcion asincrona getAlbumsUser, esta funcion recibe como parametros la variable URL y usuario
    const albums=await getAlbums(URL);//se declara la constante albumsn, en esta se almacenara el retorno de la funcion getAlbumn, en este caso retornara todos los albums junto con su respectiva informacion, a la funcion se le pasa como arguemtno la variable URL. se usa await para que e programa espere a que la funcion termine su ejecucion
    const albums_user=albums.filter((album)=>album.userId==usuario.id);//se declara la contante albumsUser, en esta se almacenara el retorno de la funcion filter, en este caso la funcion recorrera cada uno de los albums y retornara uncamente los que en su propiedad userId tengan el mismo valor que la propiedad id del usuario.
    return albums_user;//se retorna la constante albums_user
}