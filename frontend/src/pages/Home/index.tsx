import { PostsHolder } from "../../components/PostsHolder"
import type { PostProps } from "../../components/Post"
import {Post} from "../../components/Post"
import {useState,useEffect} from "react"

export default function Home() {

    const [posts,setPosts] = useState<PostProps[]>()

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/posts?page=0&limit=10`,{
                method: 'GET'}
        ).then((res)=> res.json())
        .then(data => {
            console.log(data)
            setPosts(data.data)
        })
      },[])

    return (    
        <>
            <div className="mx-auto bg-slate-200 text-center max-w-screen-lg py-2">
                <h1 className="text-center sm:text-5xl text-2xl">Posts</h1>
            </div>
            <PostsHolder>
                {(posts)? posts.map((post,index)=>{
                    return <Post {...post} />
                }):<></>}
            </PostsHolder>
        </>        
    )
}