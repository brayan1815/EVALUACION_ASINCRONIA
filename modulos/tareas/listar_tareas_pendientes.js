import { solicitar_tareas } from "./solicitar_tareas.js"

export const solicitar_tareas_pendientes_user=async(URL,user)=>{
    const tareas=await solicitar_tareas(URL);
    const tareas_pend_user= tareas.filter((tarea)=>tarea.completed==false && tarea.userId==user.id);
    return tareas_pend_user;
}