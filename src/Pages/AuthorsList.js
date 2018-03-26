import React from 'react'
import { AuthorsFetcher } from '../service/AuthorsFetcher'
import { SingleAuthorItem } from './SingleAuthorItem';

const AuthorsList = (props) => {

    console.log(props);

    return (
        <div className="container">
            {props.usersList.map((user) => {
                return <SingleAuthorItem myAuthor={user} key={user.name} />
            })}
        </div>

    )

}
export { AuthorsList }