import {Films} from '../redux/App/types';

export const getFilms = async (): Promise<Films> => {
    // const response: Response = await doRequest('/films');
    // if (response.ok && response.status === 200) {
    //     return await response.json();
    // } else {
    //     // TODO develop an error handler
    // }
    // return [];

    return Promise.resolve([
        {
            id: 'movie_id_1',
            name: 'The movie 1',
            rate: 10,
            author: {
                id: 'author_id_1',
                name: 'Author name 1'
            }
        },{
            id: 'movie_id_2',
            name: 'The movie 2',
            rate: 7,
            author: {
                id: 'author_id_2',
                name: 'Author name 2'
            }
        },{
            id: 'movie_id_3',
            name: 'The movie 3',
            rate: 5,
            author: {
                id: 'author_id_3',
                name: 'Author name 3'
            }
        },{
            id: 'movie_id_4',
            name: 'The movie 4',
            rate: 3,
            author: {
                id: 'author_id_4',
                name: 'Author name 4'
            }
        },
    ])
}