import { getUsuarios,getAlbums,getFotos } from "../modulos/index.js"; //se importalafuncion getUsuarios, getALbums y getFotos del archivo index.js que se encuentar dentro de lacaprta modulos

let name_user = prompt("Por favoringrese el nombre del usuario: ");//se declara la variable name_user, en esta variable se almanceara el nombre ingresado en el promp
const URL = "https://jsonplaceholder.typicode.com"; //se declara la variable URL y se le asigna la ruta base para hacer las solicitudes

export const getInfoUser =async () => { //se declara la funcion asincrona getInfoUsers, esta funcion se encaragra de obtener todala informacion de usuario con el mismo nombre ingresado
  const usuarios = await getUsuarios(URL); //se declara la constante usuario, en estase almacanara el retorno de la funcion getUsuarios, en este caso la informacion de todoso los usuarios
  const usuario=usuarios.filter((user)=>user.username==name_user) //se declara la constante usuario, en esta constante e almacenaran todoso los usuarios que contengan el mismo nombre al ingresado
  return await Promise.all(usuario.map(async(user) => {//e usa usa usuario.map para recorrer cada uno de los usuarios obtenidos, se usa promise all para esperar a que se cumplan todas las promesas para continuar
    const albums = await getAlbums(URL, user) //se declara la contsnate albums, en esta se almacenara el retorno de la funcion getAlbums, en este caso toda la informacion correspondente al usuario 
    const albumFotos = await Promise.all(albums.map(async (album) => {//se usa usa album.map para recorrer cada uno de los albums obtenidos, se usa promise all para esperar a que se cumplan todas las promesas para continuar
      const fotos = await getFotos(URL, album); //se declarala contsnate fotos, en esta se almacenara el valor retornado por la funcion getFotos, en este caso todas las fotos correspondientes al album
      return {...album,fotos}//se retorna un objeto con un parametro spread para expandir las propiedades del objeto y la informacion de las fotos
    }))
    return {...usuario,albumFotos}
  }))
}

getInfoUser().then((dato) => {//se obtiene la informacion de la promesa retornada por la funcion getInfoUser y se muestra en consola
    console.log(dato)
})
