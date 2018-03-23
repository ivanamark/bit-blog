import React, { Component,Fragment } from 'react';
import {Header} from '../partials/Header';
import Footer from '../partials/Footer';
import {HomePage} from "../Pages/HomePage"
import {AboutPage} from "../Pages/AboutPage"
import { Switch, Route,HashRouter } from 'react-router-dom';
import {PostPage} from '../partials/PostPage'
import {Authors} from "../Pages/Authors"
class App extends Component {
  render() {
    return (
      <Fragment>
          <Header  />
         
        <Switch>
          <Route exact path='/homepage' component={HomePage} />
          {/* <Redirect from='/' to='/homepage' />  */}
           <Route exact path='/about' component={AboutPage} />
           <Route  exact path='/authors' component={Authors} />
        </Switch> 
       
        <Footer />
         
      </Fragment>
    );
  }
}

export default App;
