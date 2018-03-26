import React from 'react'
import { Link } from 'react-router-dom';

const SinglePostItem = (props) => {
    const post = props.myPost
    return (
        <Link to={`/posts/${post.id}`}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <hr />
        </Link>
    )
}

export { SinglePostItem }