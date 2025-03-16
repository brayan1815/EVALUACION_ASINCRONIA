export const solicitud = async (URL) => {
  try{
  const peticion = await fetch(URL);
  const dato = await peticion.json();
  return dato;
  }catch(error){
    alert(error);
  }
}