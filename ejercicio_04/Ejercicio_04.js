import { getUsuarios } from "../modulos/index.js";//se importala fgunciongetUsuarios que se encuentra en la carpeta modulos dentro del archivo index.js

const URL = "https://jsonplaceholder.typicode.com";//se declarala variable URL y se le asigna la ruta base que se usara para obtener la informacion

export const getTelefonoUser = async() => { //se declara la funcion getTelefonUser, esta funcion seencargara de devolver unicamente en nombre del usuario junto con su nuero telefonico
  const usuarios = await getUsuarios(URL); //se declara la constante usuarios, esta funcion alamacenara el retorno dela funcion getUsuarios, en este caso retornara todos los usuarios

  return await Promise.all(usuarios.map((usuario) => { //se usa .map para recorrer cada uno de los usuarios y se usa paromise.alla para esperar a que todas las promesasd se cumplen y de esta manera poder continuar
    return { //se retorna un objeto con las propiedadades name y phone.
      "name": usuario.name,
      "phone":usuario.phone
    }
  }))
}

getTelefonoUser().then((dato) => { //se obtienen los datos de la promesa retornada por la funcion
  console.log(dato)//se muestran los datos obtenidos
})