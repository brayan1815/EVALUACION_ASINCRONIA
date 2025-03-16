import { solicitud } from "../helpers/solicitud.js";

export const solicitar_usuarios=async(URL)=>{
    const usuarios=await solicitud(`${URL}/users`)
    return usuarios;
}