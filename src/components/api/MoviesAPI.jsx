// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/account/{Daria759}';
// axios.defaults.params = {
//     api_key: '588a64147621c3fd4d6888977a9709ec',
// };

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODhhNjQxNDc2MjFjM2ZkNGQ2ODg4OTc3YTk3MDllYyIsInN1YiI6IjY0Zjc1OWE0ZmZjOWRlMDBlMTMyZTQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V2H9jIDUdqU5vilUneBqZGbhHzj-gr5yql41Uj7BHJA',
    },
};

export const getTrending = () => {
    return fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
    );
};

export const getMovieByName = query => {
    return fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
    );
};

export const getMovieById = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
    );
};

export const getMovieCast = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        options
    );
};

export const getMovieReviews = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
        options
    );
};

