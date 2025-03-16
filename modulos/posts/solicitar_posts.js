import { solicitud } from "../helpers/solicitud.js";

export const getPosts=async(URL)=>{
    const posts=await solicitud(`${URL}/posts`);
    return posts;
}