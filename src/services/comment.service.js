const getAllComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
};
export const commentService = {
    getAllComments
}