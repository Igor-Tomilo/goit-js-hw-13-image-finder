const BASE_URL = 'https://pixabay.com/api/';
const KEY = '20689084-4283bca478c3982aa5e3eeb23';

function fetchPhotos(searchQuery, page = 1, perPage) {
  return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${KEY}`,
  ).then(r => r.json());
}
export default fetchPhotos;
