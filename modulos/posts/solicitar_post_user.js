import { getPosts } from "./solicitar_posts.js"

export const get_post_user=async(URL,user)=>{
    const posts=await getPosts(URL);
    const post_user=posts.filter((post)=>post.userId==user.id);
    return post_user
}