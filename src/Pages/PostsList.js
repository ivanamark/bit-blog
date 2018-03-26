import React from 'react'
import { PostFetcher } from '../service/PostsFetcher'
import { SinglePostItem } from './SinglePostItem';

const PostsList = (props) => {

    console.log(props);

    return (
        <div className="container">
            {props.postsList.map((post) => {
                return <SinglePostItem myPost={post} key={post.id} />
            })}
        </div>

    )

}
export { PostsList }