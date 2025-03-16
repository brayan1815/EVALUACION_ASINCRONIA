import { solicitar_usuarios,get_users_username,get_name_phone } from "./modulos/users/index.js";
import { solicitar_tareas_pendientes_user } from "./modulos/tareas/listar_tareas_pendientes.js";
import { getAlbumsUser } from "./modulos/albums/index.js";
import { getFotosAlbum } from "./modulos/photos/index.js";
import { getPostTitle,get_post_user } from "./modulos/posts/index.js";
import { getComentsPosts } from "./modulos/comments/index.js";

const URL="https://jsonplaceholder.typicode.com";

while(true){
    let op=prompt(`1. Listar todas las tareas pendientes por cada usuario registrado en la API

2. Pedir por teclado el nombre de usuario y listar los datos del usuario que concuerden con el nombre de usuario (username), anexo a los datos del usuario se debe listar en el mismo resultado todos los álbumes del usuario con sus respetivas fotografías. Programar una función que nos sirva para filtrar los posts por su nombre, el nombredebe ser solicitado por teclado, luego se debe agregar los comentarios.

3. Programar una función que nos sirva para filtrar los posts por su nombre, el nombre debe ser solicitado por teclado, luego se debe agregar los comentarios.

4. Consultar todos los usuarios y modificar la respuesta, el resultado de esta consulta debe ser un nuevo arreglo solo con el nombre y teléfono de cada usuario.

5. Solicitar todos los usuarios en una única petición, a estos usuarios le debemos agregar todos sus posts y a cada post le debemos agregar todos sus comentarios. Luego a cada usuario le agregamos todos sus álbumes y a cada álbum le agregamos todas sus fotografías. (Comente cada línea de código explicando por qué se codifico y que soluciona).

0. Salir`);

    if(op==1){
        const tar_pend=async()=>{
            const usuarios=await solicitar_usuarios(URL);
            return Promise.all(usuarios.map(async(usuario)=>{
            const tareas_pendientes=await solicitar_tareas_pendientes_user(URL,usuario)
            return {...usuario,tareas_pendientes}; 
        }))
        }
        await tar_pend().then((tareas)=>{
            console.log(tareas);
        })
        
    }else if(op==2){
        let name_user = prompt("Por favoringrese el nombre del usuario: ");
        const user_username=async()=>{
            const usuario=await get_users_username(name_user,URL);

            return Promise.all(usuario.map(async(user)=>{
                const albums=await getAlbumsUser(URL,user);
                const Albumfotos=Promise.all(albums.map(async(album)=>{
                    const fotoAlbum=await getFotosAlbum(URL,album);
                    return {...album,fotoAlbum};
                }))
                return {...usuario,Albumfotos}
            }))
        }
        user_username().then((user)=>{
            console.log(user);
        })
    }else if(op==3){
        const titulo=prompt("Por favor ingree el titulo del post:");
        const regex=new RegExp(titulo);

        const get_post_title=async()=>{
            const post=await getPostTitle(URL,regex);

            return Promise.all(post.map(async(post)=>{
                const coment=await getComentsPosts(URL,post);
                return{...post,coment};
            }))
        }
        await get_post_title().then((post)=>{
            console.log(post);
        })
    }else if(op==4){
        await get_name_phone(URL).then((user)=>{
            console.log(user);
        })
    }else if(op==5){
        const solicitarTodaInfo=async ()=>{
            const usuarios=await solicitar_usuarios(URL);
            return Promise.all(usuarios.map(async(user)=>{
                const posts=await get_post_user(URL,user);
                const albums=await getAlbumsUser(URL,user);

                const postComents=Promise.all(posts.map(async(post)=>{
                    const comentPost=await getComentsPosts(URL,post);
                    return{...post,comentPost};
                }))

                const albumFotos=Promise.all(albums.map(async(album)=>{
                    const fotoAlbum=await getFotosAlbum(URL,album);
                    return {...album,fotoAlbum}
                }))
                return{...user,postComents,albumFotos};
            }))

        }

        await solicitarTodaInfo().then((user)=>{
            console.log(user);
        })
    }
    else if(op==0){
        alert("cerrandoe el programa...")
        break;
    }else alert("La opcion ingresada no es valida, por favor vuelva a intentarlo.");
alert("haga clic en aceptar para continuar.")
}