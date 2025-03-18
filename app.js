import { solicitar_usuarios,get_users_username,get_name_phone } from "./modulos/users/index.js"; //se importan las funciones necesarias relacionadas con el usuario, estas se exportan desde el archivo index.js en la carpeta users
import { solicitar_tareas_pendientes_user } from "./modulos/tareas/index.js";//se importan las funciones necesarias relacionadas con las tareas, estas se exportan desde el archivo index.js en la carpeta tareas
import { getAlbumsUser } from "./modulos/albums/index.js";//se importan las funciones necesarias relacionadas con los albums, estas se exportan desde el archivo index.js en la carpeta albums
import { getFotosAlbum } from "./modulos/photos/index.js";//se importan las funciones necesarias relacionadas con las fotos, estas se exportan desde el archivo index.js en la carpeta photos
import { getPostTitle,get_post_user } from "./modulos/posts/index.js";//se importan las funciones necesarias relacionadas con los post, estas se exportan desde el archivo index.js en la carpeta posts
import { getComentsPosts } from "./modulos/comments/index.js";//se importan las funciones necesarias relacionadas con los comentarios, estas se exportan desde el archivo index.js en la carpeta comments

const URL="https://jsonplaceholder.typicode.com"; //se declara la constante URL y se le asigna un string que contiene la ruta base para obtener los datos

while(true){ //se crea un bucle while true para que se muestre el menu de opciones hasta que el usuario seleccione la opcion se salir
    let op=prompt(`1. Listar todas las tareas pendientes por cada usuario registrado en la API 

2. Pedir por teclado el nombre de usuario y listar los datos del usuario que concuerden con el nombre de usuario (username), anexo a los datos del usuario se debe listar en el mismo resultado todos los álbumes del usuario con sus respetivas fotografías. Programar una función que nos sirva para filtrar los posts por su nombre, el nombredebe ser solicitado por teclado, luego se debe agregar los comentarios.

3. Programar una función que nos sirva para filtrar los posts por su nombre, el nombre debe ser solicitado por teclado, luego se debe agregar los comentarios.

4. Consultar todos los usuarios y modificar la respuesta, el resultado de esta consulta debe ser un nuevo arreglo solo con el nombre y teléfono de cada usuario.

5. Solicitar todos los usuarios en una única petición, a estos usuarios le debemos agregar todos sus posts y a cada post le debemos agregar todos sus comentarios. Luego a cada usuario le agregamos todos sus álbumes y a cada álbum le agregamos todas sus fotografías. (Comente cada línea de código explicando por qué se codifico y que soluciona).

0. Salir`); //se declara la variable op y se solicita al usuario que ingrese el numero correspondiente a la opcion deseada

    if(op==1){ //en caso de que laopcion seleccionada sea la numero uno se mostraran todos los usuarios junto con sus tareas pendientes
        const tar_pend=async()=>{ //se declara la funcion asincrona tar_pend
            const usuarios=await solicitar_usuarios(URL);//se declara la constante usuarios, en esta se almacenara el retorno de la funcion solicitar_usuarios, a esta funcion se le pasa como argumento la constante URL, esta funcion retornara todos los usuarios junto con su informacion, se usa await para que el programa espere a que la funcion termine de ejecutarse.
            return Promise.all(usuarios.map(async(usuario)=>{ //se usa promise.all para esperara que todas las promesas se cumplan antes de retornar el resultado. Se usa usuarios.map para recorrer cada uno de los usuarios. la callback recibe un usuario y retorna un objeto con la informacion del usuario y sus tareas pendientes.
            const tareas_pendientes=await solicitar_tareas_pendientes_user(URL,usuario) //se declara la constante tareas_pendientes, en esta se almacenara el retorno de la funcion solicitar_tareas_pendientes, a esta funcion se le pasan como argumentos la constante URL y el usuario, en este caso la funcion retornara las tareas pendients correspondientes al usuario. se usa await para que el programa espere a que la funcion termine su ejecucion.
            return {...usuario,tareas_pendientes};  //se retorna un objeto con la informacion del usuario y sus tareas pendientes
        }))
        }
        await tar_pend().then((tareas)=>{ //se llama a la funcion_tar_pend. se usa .then para acceder al resultado retotnado por la funcion. se usa await para que el ciclo espere a que la funcion termine de ejecutar
            console.log(tareas); //se muestra el resultado retornado por la funcion.
        })
        
    }else if(op==2){ //en caso de que la opcion seleccionada sea la numero dos se solicitara que se ingrese el nombre del usuario y se mostraran los albumes correspondientes al usuario junto con sus fotos
        let name_user = prompt("Por favoringrese el nombre del usuario: "); //se declara la variable name_user, en esta se almacenara el nombre de usuario ingresado.
        const user_username=async()=>{ //se declara la funcion asincrona user_username
            const usuario=await get_users_username(name_user,URL); //se declara la constante usuario, en esta se alamcenara el retorno de la funcion get_users_username, a esta funcion se le pasan como argumentos la variable name_user y la constante URL, en este caso la funcion retornara toda la informacion correspondiente al usuario identificado con el mismo nombre de usuario que se ingreso. se usa await para esperar a que la funcion termine su ejeccion.

            return Promise.all(usuario.map(async(user)=>{ //se usa promise.alla para esperar a que todas las promesas se cumplan antes de retornar el resultado, se usa .map para recorrer los usuarios que se encuentren en la constante usuario, la callback recibe un usuario y retorna un objeto con la informacion del usuario y la informacion amacenada en Albumfotos
                const albums=await getAlbumsUser(URL,user); //se declara la cnstante albums, en esta alamaceara el retorno de la funcion getAlbumsUser, a esta funcion se le pasan como argumentos la constante URL y el user. se usa await para que el programa espere a que la funcion termine de ejecutar
                const Albumfotos=Promise.all(albums.map(async(album)=>{//se declara la constante AlbumFotos, en esta se almacenara el retorno de la callaback dentro del .map, se usa .map para recorrer cada uno de los albums, a la callback del .map se le pasa como argumento el album actual, esta callback retornara un objeto con toda la informacion del album y sus fotos.
                    const fotoAlbum=await getFotosAlbum(URL,album);//se declara la constante fotoAlbum, en esta se almacenara el retorno de la funcion getFotosAlbum, esta funcion retornara toda las fotos correspondinetes al album junto con su informacion, a esta funcion se le pasa como argumento la constante URL y album.
                    return {...album,fotoAlbum};//la callback retorna un objeto en el cual se encuentra el album con su informacion y sus respectivas fotos.
                }))
                return {...usuario,Albumfotos} //la callback retornara un objeto con toda la informacion del usuario y sus albums
            }))
        }
        await user_username().then((user)=>{ //se llama a la funcion user_username, se usa .then para acceder al resultado retornado por la funcion
            console.log(user);//se muestra el resultado que retorna la funcion
        })
    }else if(op==3){ //en caso de que la opcion seleccionada sea la numero tres se solicitara que se ingrese el titulo del post y se mostrara toda la informacion de los post relacionados con este nombre y sus comentarios.
        const titulo=prompt("Por favor ingree el titulo del post:"); //se declar la constante titulo, en esta se almacenara el nombre del post ingresado por el usuario
        const regex=new RegExp(titulo);//se declara la constante regex, en esta se almacenara una nueva regex creada a base del titulo que se ingreso anteriormente, esta expresion se usara para buscar todos los post que en su titulo tengan alguna coincidencia con el nombre ingresado por el usuario.

        const get_post_title=async()=>{ //se declara la funcion asincrona get_post_title.
            const post=await getPostTitle(URL,regex); //se declara la constante post, en esta se almacenara el retorno de la funcion getPostTitle, la funcion retornara unicamente los post que tengan alguna coiincidencia con el nombre ingresado, a esta funcion se le pasan como argumentos la constante URL y la variable regex. se usa awit para esperar a que la funcion se termine de ejecutar.

            return Promise.all(post.map(async(post)=>{ //se usa promise.all para esperar a que todas las promesas se cumplan antes de retornar el resultado, se usa post.map para recorrer cada uno de los post, la callback recibe como argumento un post y retorna un objeto con la informacion del post y ssus comentarios
                const coment=await getComentsPosts(URL,post); //se declara la constante coment, en esta se almacenara el retorno de la funcion getComentsPosts, en este caso retornara los comentarios correspondientes al post, a esta funcion se le envia como argumento la URL y el post. se usa await para que el programa espere a que la funcion se termine de ejecutar
                return{...post,coment};//se retorna un objeto con la informacion del post y sus respectivos comentarios
            }))
        }
        await get_post_title().then((post)=>{ //se llama a la funcion get_post_title, se usa .then para acceder al resultado retotnado por la funcion, se usa await para que el ciclo espere a que la funcion termine su ejecucion.
            console.log(post); //se muestra el resultado retornado por la funcion 
        })
    }else if(op==4){ //en caso de que la opcion seleccionada sea la numero 4 se mostraran el nombre del usuario y su telefono unicamente
        await get_name_phone(URL).then((user)=>{ //se llama a la funcion get_name_phone y se accede al resultado retornado usando .then, esta funcion retornara unicamente los usuarios son su nombre y telefono.
            console.log(user);//se muestra el retorno de la funcion.
        })
    }else if(op==5){ //en caso de que el usuario seleccione la opcion 5 se mostrara toda la informacion del usuario junto con sus post, albums, fotos y comentarios
        const solicitarTodaInfo=async ()=>{ //se declara la funcion asincrona solicitarTodaInfo
            const usuarios=await solicitar_usuarios(URL); //se declara la constante usuarios, en esta se almacenara el retorno de la funcion solicitar_usuarios, a esta funcion se le pasa como argumento la constante URL, esta funcion retornara todos los usuarios con su respectiva informacion. se usa await para que el programa espere a que la funcion se ejecute
            return Promise.all(usuarios.map(async(user)=>{ //se usa promise.all para que no retorne el resultado hasta que todas las promesas se cumplan, se usa .map para recorrer cada uno de los usuarios, la callback recibe como parametro al usuario y retorna un objeto con toda la informacion del usuario, sus albums y sus post
                const posts=await get_post_user(URL,user);//se declara la constante posts, en esta se almacenara el retorno de la funcion get_post_user, a esta funcion se le pasa como argumento la URL y el usuario, en este caso la funcion retornara todos los post del usuario junto con su respectiva informacion. se usa await para que el programa espere a que la funcion se ejecute.
                const albums=await getAlbumsUser(URL,user);//se declara la constante albums, en esta se almacenara el retorno de la funcion getAlbumsUser, a esta funcion se le pasa como argumento la URL y el usuario, en este caso la funcion retornara todos los albums del usuario junto con su respectiva informacion. se usa await para que el programa espere a que la funcion se ejecute.

                const postComents=Promise.all(posts.map(async(post)=>{ //se declara la constante PostComents, en esta se almacenara en retorno de la callback, se usa promise .all para esperar a qur todas las promesas se cumplan, se usa .map para recorrer cada uno de los post del usuario, la callback recibe como parametro el post y retorna un objeto con toda la informacion del ppst y sus comentarios
                    const comentPost=await getComentsPosts(URL,post);//se dclara la contsnate comentPost, en esta se almacenara el retorno de la funcion getComentsPost, en este caso retornara todoso los comentarios correspondientes al post, a esta funcion se le envia como argumento la constante URL y el post. se usa await para esperar a que la funcion se ejecute
                    return{...post,comentPost}; //se retorna un objeto con la informacion del post y los comentarios de este.
                }))

                const albumFotos=Promise.all(albums.map(async(album)=>{//se declara la constante albumFotos, en esta se almacenara en retorno de la callback, se usa promise .all para esperar a qur todas las promesas se cumplan, se usa .map para recorrer cada uno de los albums del usuario, la callback recibe como parametro el album y retorna un objeto con toda la informacion del album y sus fotos
                    const fotoAlbum=await getFotosAlbum(URL,album);//se dclara la contsnate fotoAlbum, en esta se almacenara el retorno de la funcion getFotosAlbum, en este caso retornara todas las fotos correspondientes al album, a esta funcion se le envia como argumento la constante URL y el album. se usa await para esperar a que la funcion se ejecute
                    return {...album,fotoAlbum}//se retorna un objeto con la informacion del album y lass fotos de este.
                }))
                return{...user,postComents,albumFotos}; //se retorna un objeto con la informacion del usaurio, los post y los albums
            }))

        }

        await solicitarTodaInfo().then((user)=>{//se llama a la funcion solicitarTodaInfo y se accede al retorno de esta con .then. se usa await para esperar a que la funcion se ejecute
            console.log(user); //se muestra el retorno de la funcion 
        })
    }
    else if(op==0){ //en caso de que la opcion seleccionada sea cero se mostrara un mensaje y se rompera el bucle
        alert("cerrandoe el programa...")//se muestra el mensaje
        break;//se rompe el bucle
    }else alert("La opcion ingresada no es valida, por favor vuelva a intentarlo."); //en caso de que la opcion seleccionada no corresponda a ninguna de las mostradas se mostrara un mensaje indicando que la opcion ingresada no es valida
alert("haga clic en aceptar para continuar.") //se mostrara un alert indicando que haga clicl en aceptar para mostrarr nuevamente el menu de opciones
}