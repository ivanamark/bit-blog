import React from 'react'
import { SinglePostItem } from './SinglePostItem';
import { PostsList } from './PostsList';
import { PostsFetcher } from '../service/PostsFetcher';

class HomePage extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        PostsFetcher()
            .then((myPosts) => {
                this.setState({
                    posts: myPosts
                })
            })
    }

    render() {
        return (
            <div className="container">
                <PostsList postsList={this.state.posts} />
            </div>

        )
    }

}
export { HomePage }