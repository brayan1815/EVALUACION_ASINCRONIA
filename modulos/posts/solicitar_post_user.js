import { getPosts } from "./solicitar_posts.js" //se importa la funcion getPost que se encuentra en el archivo solicitar_posts.js

export const get_post_user=async(URL,user)=>{//se exporta y se declara la funcion asincrona get_post_user, esta funcion recibe como parametros la variabel URL y erl user
    const posts=await getPosts(URL); //se declara la constante post, en esta se almacenara el retorno de la funcion getPosts, esta funcion retornara todos los post con su respectiva informacion, la funcion recibe como parametro la URL, se usa await para esperar a que la funcion se ejecute
    const post_user=posts.filter((post)=>post.userId==user.id); ////se declara la constante post_user, en esta se almacenara el retorno de la funion filter, etsa funcion se encargara de recorrer uno a uno los post y retornara unicamente los en su propiedad userId tengan el mismo valor de la propiedad id del user
    return post_user //se retorna la contsnate post_user
}