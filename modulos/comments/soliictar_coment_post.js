import { getComents } from "./solicitar_comentarios.js";

export const getComentsPosts=async (URL,post)=>{
    const coments=await getComents(URL);
    const coment_post=coments.filter((coment)=>coment.postId==post.id);
    return coment_post;
}