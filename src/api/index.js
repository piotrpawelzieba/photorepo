const rootUrl = 'http://localhost:3090'

const getPhotos = () => fetch(rootUrl + '/api/photos');

export {getPhotos};
