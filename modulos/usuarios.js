import { solicitud } from "./solicitud.js";

export const getUsuarios = async(URL) => {
  const ruta = `${URL}/users`
  const usuarios = await solicitud(ruta);
  return usuarios;
}