import { getPosts } from "./solicitar_posts.js";

export const getPostTitle=async(URL,Regex)=>{
    const posts=await getPosts(URL);
    const postTitle=posts.filter((post)=>Regex.test(post.title));
    return postTitle;
}