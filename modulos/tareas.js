import { solicitud } from "./solicitud.js";

export const getTareas = async (URL,user) => {
  return await solicitud(`${URL}/todos?userId=${user.id}`)
}