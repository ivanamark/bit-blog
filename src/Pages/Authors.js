import React from 'react'
import { Link } from 'react-router-dom'
import { AuthorsFetcher } from '../service/AuthorsFetcher'
import { AuthorsList } from './AuthorsList'



const Authors = () => {

    return (
        <div className="container">
            <h5 className="center">AUTHORS(6)</h5>
            <p><Link to="singleauthor">Name Surname</Link></p><hr />
            <p>Name Surname</p><hr />




        </div>

    )


}
export { Authors }