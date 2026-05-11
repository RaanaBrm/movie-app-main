import { Routes, Route, Outlet } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Home from './pages/home/home';
import Movies from './pages/all movie/movies';
import Movie from './pages/movie/movie';
import Add from './pages/add/add';
import Aboutus from './pages/about us/aboutus';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="add" element={<Add />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </MoviesProvider>
  );
}

export default App;