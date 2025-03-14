import { solicitud } from "./solicitud.js";

export const getUsuarios = async (URL, user_name) => {
  let ruta = "";
  if (user_name) {
     ruta = `${URL}/users?username=${user_name}`
  } else {
     ruta=`${URL}/users`
  }
  
  const usuarios = await solicitud(ruta);
  return usuarios;
}