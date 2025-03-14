import { solicitud } from "./solicitud.js";

export const getFotos = async (URL, album) => {
  return await solicitud(`${URL}/photos?albumId=${album.id}`)
}