
const getAllPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
};
export const postService = {
    getAllPosts
}