import { solicitar_usuarios } from "./solicitar_usuarios.js"; //se importa la funcion solicitud del archivo solicitud.js que se encuentra dentro de la carpeta helpers

export const get_name_phone=async(URL)=>{ //se expora y se declara la funcion asincrona get_name_phone, esta funcion recibe como parametro la variable URL 
    const users=await solicitar_usuarios(URL);//se declara la constante user, en esta constante se almacenara el valor retornado por la funcion solicitar_usuarios, a esta funcion se le pasa como arguemnto la variable URL, en este caso la funcion retornara todos los usuarios con su respectiva informacion.
    return Promise.all(users.map(async(user)=>{ //se usa promise.all para que espere y no retorne el resultado sino hasta que todas las promesas se cumplan, se usa .map para recorrer cada uno de los usuarios, la callback recibe como parametro el user.
        return {"name":user.name,
                "Phone":user.phone
        }//se retorna un objeto con la propiedad name y la propiedad phone unicamente.
    }))
}