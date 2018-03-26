import React from 'react'
import { Link } from 'react-router-dom';

const SinglePost = () => {

    return (
        <div className="container">
            <h4 className="center">SINGLE POST TITLE</h4>
            <p className="center"><Link to='singleauthor'>Author Name</Link></p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpatorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpatLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam</p>
            <hr />

            <h5 className='center'>3 more posts from same author</h5>
            <p className='center'>Title 10 - velit,vulputate eu pharetra nec</p><br />
            <p className='center'>Title 10 - velit,vulputate eu pharetra nec</p><br />
            <p className='center'>Title 10 - velit,vulputate eu pharetra nec</p>
        </div>

    )
}
export { SinglePost }