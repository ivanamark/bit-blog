import React, { Component, Fragment } from 'react';
import { Header } from '../partials/Header';
import Footer from '../partials/Footer';
import { HomePage } from "../Pages/HomePage"
import { AboutPage } from "../Pages/AboutPage"
import { Switch, Route } from 'react-router-dom';
import { PostPage } from '../partials/PostPage'
import { Authors } from "../Pages/Authors"
import { SinglePost } from "../Pages/SinglePost"
import { SingleAuthor } from "../Pages/SingleAuthor"
import { NewPost } from "../Pages/NewPost"
import { ContentFetcher } from '../service/ContentFetcher'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path='/' component={NewPost} />
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/authors' component={Authors} />
          <Route exact path='/singleauthor' component={SingleAuthor} />
          <Route exact path='/singlepost' component={SinglePost} />
        </Switch>

        <Footer />

      </Fragment>
    );
  }
}

export default App;
