import { PostsFetcher } from '../../service/PostsFetcher'

class Posts {
    constructor(post) {
        this.userID = post.userId;
        this.id = post.id;
        this.title = post.title;
        this.body = post.body;
    }
}

export { Posts }