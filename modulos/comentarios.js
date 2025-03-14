import { solicitud } from "./solicitud.js";

export const getComents = async(URL, post) => {
  let ruta = "";
  if (post) {
    ruta = `${URL}/comments?postId=${post.id}`;
  } else {
    ruta=`${URL}/comments`
  }
  return await solicitud(ruta);
}