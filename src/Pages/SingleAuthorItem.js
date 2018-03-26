import React from 'react'
import { Link } from 'react-router-dom';

const SingleAuthorItem = (props) => {
    const user = props.myAuthors
    return (
        <Link to={`/users/${user.name}`}>

            <hr />
        </Link>
    )
}

export { SingleAuthorItem }