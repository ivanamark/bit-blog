import { Authors } from '../Pages/Authors'


const AuthorsFetcher = (users) => {

    const options = {
        method: "GET"
    }

    return fetch('https://jsonplaceholder.typicode.com/users', options)

        .then(response => response.json())
        .then((usersData) => {



            const myAuthor = usersData.map((users) => {
                return new Authors(users.username)
            })

            return myAuthor
        })


}

export { AuthorsFetcher }