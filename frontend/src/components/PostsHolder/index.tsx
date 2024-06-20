import React from 'react';
import { Post } from '../Post';

export type PostsHolderProps = {
    children: React.ReactElement<typeof Post> | React.ReactElement<typeof Post>[] 
}

export const PostsHolder = ({children}: PostsHolderProps) => {
    return (
        <section className="mx-auto flex flex-row flex-wrap max-w-screen-lg justify-center bg-slate-200 pb-8">            
            {children}
        </section>
    );
};