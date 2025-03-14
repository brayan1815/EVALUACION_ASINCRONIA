import { getPosts,getComents } from "../modulos/index.js";//se importan la funcion getPosts y la funcion getComents de el archivo index.js que se encuentradentro de la carpeta modulos


const title = prompt("Por favor ingrese el titulo del post"); //se declara la constante titulo y se solicita que se ingrese el titulo que se desea buscar
const regex = new RegExp(title);//se declara una nueva expresion regular con el titulo ingresado
const URL = "https://jsonplaceholder.typicode.com";//se declara la constante URL, en esta se almacenara la ruta base para obtener los datos

export const getPostComent = async() => {//se declara la funcion getPostComents y se exporta
  const posts = await getPosts(URL);//se declara la constante posts, en esta se almacenara el retorno de la funcion getPost, en este caso todos los post con su respectiva informacion
  const post = posts.filter((post) => regex.test(post.title));

  return await Promise.all(post.map(async(post) => {
    const comentarios = await getComents(URL, post);
    return{...post,comentarios}
  }));
}

getPostComent().then((dato) => {
  console.log(dato);
})