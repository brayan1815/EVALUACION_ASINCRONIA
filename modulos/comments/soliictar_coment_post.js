import { getComents } from "./solicitar_comentarios.js";//se importa la funcion getComents sel archivo solicitar_comentarios.js

export const getComentsPosts=async (URL,post)=>{ //se exporta y se declara la funcion asincrona getComentsPosts, esta funcion recibe como parametros la variable URL y post
    const coments=await getComents(URL);////se declara la constante coments, esta almacenara el retorno de la funcion getComents, en este caso retornara todos los comentarios con su informacion, a esta funcion se le envian como argumentos la variable URL.
    const coment_post=coments.filter((coment)=>coment.postId==post.id);//se declara la constante coment_post, en esta se almacenara el retorno de la funion filter, etsa funcion se encargara de recorrer uno a uno los comentarios y retornara unicamente los que en su peopiedad postId tengan el mismo valor que la propiedad id del post
    return coment_post; //se retorna la constante coment_post
}