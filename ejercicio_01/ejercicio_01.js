import { getUsuarios,getTareas } from "../modulos/index.js"; //se importa la funcion getUsuarios y la funcion getTareas de la capeta modulos del archivo index.js

const URL = "https://jsonplaceholder.typicode.com";//se declara a constante URL, en esta se almacenara el link que setomara como base para obtener los datos


const getTareasPendientes = async() => { //se declara la funcion asincrona getTareas pendientes, esta funcion se encaragra de obtener todas las tareas pendientes de los usuarios dependiendo de su ID y su estado
  const usuarios = await getUsuarios(URL); //se declara la constante usuario, en estase almacanara el retorno de la funcion getUsuarios, en este caso la informacion de todoso los usuarios
  return await Promise.all(usuarios.map(async (usuario) => { //e usa usa usuarios.map para recorrer cada uno de los usuarios obtenidos, se usa promise all para esperar a que se cumplan todas las promesas para continuar
    const tareas = await getTareas(URL, usuario); //se declara la constante tareas, en esta se almacena el retorno de la funcionGetTareas, en este caso la funcion retornara todas las tareas identificadas con el mismo id del usuario
    const tareas_pend=tareas.filter((tarea)=>tarea.completed==false)//se declara la constante tareas_pend, en esta se almacenara un arreglo de objetos con las tareas que se encuentren unicamente pendientes, para esto se usa el filter, pra determinar que tareas estan pendientes
    return {...usuario,tareas_pend}//se retorna un objeto con un parametro spread para expandir las propiedades del objeto y la informacion de las tareas pendientes
  }))
}


getTareasPendientes().then((data) => { //se obtiene la informacion de la promesa retornada por la funcion getTareasPendientes
  for (let n = 0; n <10; n++){ //se usa un bucle for para recorrer cada uno de los elementos del objeto y mostrarlos listados en consola.
    console.log(data[n]);
  }
});