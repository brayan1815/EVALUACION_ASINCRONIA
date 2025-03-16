import { solicitar_usuarios } from "./solicitar_usuarios.js";

export const get_users_username=async(userName,URL)=>{
    const usuarios=await solicitar_usuarios(URL);
    const usuario=usuarios.filter((user)=>user.username==userName);
    return usuario;
}