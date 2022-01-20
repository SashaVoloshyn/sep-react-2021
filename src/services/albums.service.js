const getById = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/albums/' + id +'/photos')
        .then(value => value.json());

}
export const albumService ={
    getById
};