import axios from 'axios';

// const ApiKey = '2afcdbf2a6f91f65b21b4138c888163f';

const auth =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWZjZGJmMmE2ZjkxZjY1YjIxYjQxMzhjODg4MTYzZiIsInN1YiI6IjYwN2YwYmUyN2UzNDgzMDAyOTQ4NzNiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L4eemGBGL07OUG78yjQO-yAtMkK-xXzZ3S1NQkL9a80';
const Authorization = {
  Authorization: auth,
};

const ServiceApi = {
  getTrending() {
    return axios({
      url: `https://api.themoviedb.org/3/trending/movie/day`,
      headers: Authorization,
    }).then(({ data }) => data.results);
  },
  getSearching(query) {
    return axios({
      headers: Authorization,
      url: `https://api.themoviedb.org/3/search/movie${query}`,
    }).then(({ data }) => data.results);
  },
  getMovieById(query) {
    return axios({
      headers: Authorization,
      url: `https://api.themoviedb.org/3/movie${query}`,
    }).then(({ data }) => data);
  },
};

export default ServiceApi;
