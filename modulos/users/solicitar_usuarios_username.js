import { solicitar_usuarios } from "./solicitar_usuarios.js"; //se imporya la funcion solicitar_usuarios que se encuentra en el archivo solicitar_usuarios.js

export const get_users_username=async(userName,URL)=>{ //se declara y se exporta la funcion asincrona get_users_username, esta funcion recibe como parametros la variable userName y la variable URL.
    const usuarios=await solicitar_usuarios(URL);//se declara la constante usuarios, en esta se almacenara el valor retornado por la funcion solicitar_usuarios, a esta funcion se le pasa como argumento la variable URL, en este caso la funcion retornara la informacion de todos los usuarios. se usa await para que el programa espere a que la funcion termine de ejecutarse
    const usuario=usuarios.filter((user)=>user.username==userName); //se declara la constante usuario, en esta se almacenara el retorno de la funcion filter, esta funcion se encargara de recorrer uno a uno los usuarios y retornara unicamente los usuarios que en su propiedad username tengan el mismo username ingresado por el usuario.
    return usuario;//se retornara la constante usuario.
}