import { solicitud } from "../helpers/solicitud.js";

export const getFotos=async(URL)=>{
    const fotos=await solicitud(`${URL}/photos`)
    return fotos;
}