import { solicitud } from "../helpers/solicitud.js";

export const getComents=async(URL)=>{
    const coments=await solicitud(`${URL}/comments`);
    return coments;
}