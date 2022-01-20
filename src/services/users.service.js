const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
};

const getById = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json());
};
const getByIdPosts = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id +'/posts')
        .then(value => value.json());
};

const getByIdAlbums = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id +'/albums')
        .then(value => value.json());

}

export const usersService = {
    getAll,
    getById,
    getByIdPosts,
    getByIdAlbums
};