import { Posts } from '../app/entities/Posts'

const PostsFetcher = () => {

    const options = {
        method: "GET"
    }

    return fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(response => response.json())
        .then((postsData) => {
            const myPosts = postsData.map((post) => {
                return new Posts(post)
            })

            return myPosts
        })

}

export { PostsFetcher }