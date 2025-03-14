export const solicitud = async (URL) => {
  const peticion = await fetch(URL);
  const dato = await peticion.json();
  return dato;
}