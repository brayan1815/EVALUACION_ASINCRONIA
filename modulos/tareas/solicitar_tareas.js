import { solicitud } from "../helpers/solicitud.js"
    
export const solicitar_tareas=async(URL)=>{
    const tareas= await solicitud(`${URL}/todos`);
    return tareas;
}