import { PostsHolder } from "../../components/PostsHolder";
import type { PostProps } from "../../components/Post";
import {Post} from "../../components/Post";
import {useState,useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {

    const [posts,setPosts] = useState<PostProps[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(1);
    const [error,setError] = useState(false);

    const errorHandler = ()=>{
        setError(true)
    }

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/posts?page=0&limit=10`,{
                method: 'GET'}
        ).then((res)=> res.json())
        .then(data => {
            setPosts(data.data);
        }).catch(errorHandler);
      },[]);

    const fetchMoreData = () => {
        fetch(`${import.meta.env.VITE_API_URL}/posts?page=${index}&limit=10`,{
            method: 'GET'}
        ).then((res)=> res.json())
        .then(data => {
            setPosts((prevItems)=> [...prevItems, ...data.data]);
            data.data.length > 0 ? setHasMore(true) : setHasMore(false);
        }).catch(errorHandler)

        setIndex((prevIndex) => prevIndex + 1);
    };

    return (    
        <>
            <div className="mx-auto bg-slate-200 text-center max-w-screen-lg pt-2 pb-4">
                <h1 className="text-center sm:text-5xl text-2xl">Posts</h1>
                {error && (
                    <h2 className="text-center sm:text-3xl text-xl my-4">Error contacting the API</h2>
                )}
            </div>
            {!error && (
                <InfiniteScroll
                    dataLength={posts.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<div className="mx-auto bg-slate-200 text-center max-w-screen-lg py-2 font-bold">Loading...</div>}
                >
                    <PostsHolder>
                        {(posts)? posts.map((post)=>{
                            return <Post key={post.id} {...post} />;
                        }):<></>}
                    </PostsHolder>
                </InfiniteScroll>
            )}
        </>        
    );
}