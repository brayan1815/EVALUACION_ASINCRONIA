import { getFotos } from "./solicitar_foto.js";

export const getFotosAlbum=async(URL,album)=>{
    const fotos=await getFotos(URL);
    const foto=fotos.filter((foto)=>foto.albumId==album.id);
    return foto;
}