import axios from 'axios';


export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
) {
    //localhost:3001/api/books?skip=3&limit=2&order=asc
    //send request
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data
            }
        });


    return {
        type: 'GET_BOOKS',
        payload: request
    }

}

