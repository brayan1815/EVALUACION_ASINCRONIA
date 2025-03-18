import { getPosts } from "./solicitar_posts.js"; //se importa la funcion getPost del archivo solicitar_posts.js

export const getPostTitle=async(URL,Regex)=>{//se exporta y se declara la funcion asincrona getPostTitle, esta funcion recibe como parametros la variable URL y la variable regex
    const posts=await getPosts(URL); //se declara la constante posts, en esta se almacenara el retorno de la funcion getPost, esta funcion retornara todos los post con su respectiva infroamcion, se le encia como argumento la URL a la funcion. se usa await para que el programa espere a que la funcion se termine de ejecutar
    const postTitle=posts.filter((post)=>Regex.test(post.title)); //se declara la constante postTitle, en esta se almacenara el retorno de la funion filter, etsa funcion se encargara de recorrer uno a uno los post y retornara unicamente los que tengan alguna coincidencia en el titulo con el titulo ingresado
    return postTitle;//se retorna la constante postTitle
}