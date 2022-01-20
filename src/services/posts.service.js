const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
};

const getById = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(value => value.json());

};

const getByIdComments = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        .then(value => value.json());
};

export const postsService = {
    getAll,
    getById,
    getByIdComments
};