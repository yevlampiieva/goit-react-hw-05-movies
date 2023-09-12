import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchTrendingMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const response = await fetchTrendingMovies();
        const movies = response.results;
        toast.success('Injoy our trending movies');
        setMovies(movies);
      } catch (error) {
        toast.error('Oops, something went wrong. Try restart webpage');
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {loading && <Loader />}
    </div>
  );
};

export default Home;
