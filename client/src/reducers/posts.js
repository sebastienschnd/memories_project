export default (posts = [], action) => {
    switch (posts.type) {
        case 'FETCH_ALL':
            return posts;
         case 'CREATE':
            return posts;
        default:
            return posts;
    }
}