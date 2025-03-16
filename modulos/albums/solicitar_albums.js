import { solicitud } from "../helpers/solicitud.js";

export const getAlbums=async(URL)=>{
    const albums=await solicitud(`${URL}/albums`)
    return albums;
}