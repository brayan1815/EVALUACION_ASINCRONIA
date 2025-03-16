import { getAlbums } from "./solicitar_albums.js"

export const getAlbumsUser=async(URL,usuario)=>{
    const albums=await getAlbums(URL);
    const albums_user=albums.filter((album)=>album.userId==usuario.id);
    return albums_user;
}