import React from 'react'
import { Link } from 'react-router-dom';

const SingleAuthor = () => {
  return (
    <div className="container">
      <table className="centered">
        <thead>
          <tr>
            <th><p><Link to="/homepage">&#60;All authors</Link></p></th>
            <th><h2>Single Author</h2></th>

          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img class="responsive-img" src="http://www.catdepot.org/App_Themes/CatDepot/images/cat-img.jpg" alt="" />
            </td>
            <td><h5>Name Surname</h5><br /><p>username : my_cool_username</p><br /><p>email : my_cool_email.com</p><br /><p>phone : 1-17-770-897</p>
            </td>

          </tr>
          <tr>
            <td><h5>Addres</h5><p>street : Bla Bla Bla</p><br /><p>City : Gwadaloope</p><br /><p>zipcode : 14587</p></td>
            <td><img src='http://www.sparxsys.com/sites/default/files/sampleMap.JPG' alt="" /></td>

          </tr>
          <tr>
            <td><h5>Company</h5><br /><p>name  : Books best</p><br /><p>slogan : We are the best</p></td>
            <td></td>

          </tr>
        </tbody>
      </table>

    </div>










  )
}


export { SingleAuthor }




