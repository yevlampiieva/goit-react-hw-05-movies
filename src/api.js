import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'e01db39196c39b65fa411f4e61714d05';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}` );
  return response.data;
};
