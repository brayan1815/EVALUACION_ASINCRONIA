import { solicitud } from "./solicitud.js";

export const getPosts = async (URL, usuario) => {
  let ruta = "";
  if (usuario) {
    ruta=`${URL}/posts?userId=${usuario.id}`
  } else {
    ruta = `${URL}/posts`;
  }
  return await solicitud(ruta);
}