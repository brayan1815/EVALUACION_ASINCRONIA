export const solicitud = async (URL) => {//se exporta y se declara la funcion asincrona solicitud, esta funcion recibe como parametro la variable URL, esta funcion se encaragara solicitar por medio de fetch toda la informacion contenida en la URL
  try{//se usa try catch para manejar posibles errores al momento de realizar la solicitud 
  const peticion = await fetch(URL); //se declara la constante peticion, en esta se almacenara toda la informacion obtenida por fetch. se usa await para que el programa espere a que se termine de realizar la peticion.
  const dato = await peticion.json();//se declara la constante dato, en esta se almacenara toda la informacion almacenara en peticion, pero esta vez convertida en json
  return dato; //se retorna la constante dato
  }catch(error){ //se obtienen los posibles errores dentro de la variable error
    alert(error);//se muestra en un alert el error obtenido.
  }
}