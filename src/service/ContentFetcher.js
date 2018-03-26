import { NewPost } from '../Pages/NewPost'


const fetchNewPost = (post) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}

export { fetchNewPost }