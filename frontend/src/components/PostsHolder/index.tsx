import React from 'react'
import { Post } from '../Post'

export type PostsHolderProps = {
    children: React.ReactElement<typeof Post> | React.ReactElement<typeof Post>[] 
}

export const PostsHolder = ({children}: PostsHolderProps) => {
    return (
        <section className="flex flex-row flex-wrap max-w-7xl">
            {children}
        </section>
    )
}