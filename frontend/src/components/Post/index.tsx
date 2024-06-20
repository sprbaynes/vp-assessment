import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

export type PostProps = {
    id?: string
    image?: string
    likes?: number
    tags?: string[]
    text?: string
    publishDate: string
    owner?: Owner
}

export type Owner = {
    id?: string
    title?: string
    firstName?: string
    lastName?: string
    picture?: string
}

export const Post = ({id,image,likes,text,publishDate,owner}:PostProps) => {

    const parsedDate =moment(publishDate).format('Do MMMM YYYY hh:mm')

    return (
        <article key={id} className="flex flex-col bg-gray-100 rounded-md p-4 max-w-lg">
            <div className="flex flex-row mb-4">
                <div><img className="rounded-md w-12" src={owner?.picture}/></div>
                <div className="mx-2">
                    <div><span className="font-bold">{owner?.firstName} {owner?.lastName}</span></div>
                    <div className="text-xs">
                        {parsedDate}
                    </div>
                </div>            
            </div>
            <div className="mb-4">
                <img className="rounded-md" src={image} />
            </div>
            <div>
                <div><FontAwesomeIcon className={`mx-2`} icon={faHeart} />{likes}</div>
            </div>        
            <div>
                {text}
            </div>
        </article>
    )
}