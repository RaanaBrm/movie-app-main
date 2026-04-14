import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const API_KEY = "e03240d5";

export const MoviesProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchMovies = useCallback((search = "batman") => {
		setLoading(true);

		axios
			.get(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
			.then((res) => {
				if (res.data && res.data.Response === "True" && res.data.Search) {
					const formattedData = res.data.Search.map((movie) => ({
						id: movie.imdbID,
						original_title: movie.Title,
						poster_path:
							movie.Poster !== "N/A" ? movie.Poster : "/images/no-image.png",
						release_date: movie.Year,
						vote_average: "N/A",
						overview: "No description available",
					}));


					const uniqueMovies = formattedData.filter(
						(movie, index, self) =>
							index === self.findIndex((m) => m.id === movie.id)
					);

					setMovies(uniqueMovies);
				} else {
					console.warn("No movies found or invalid API key.");
					setMovies([]);
				}

				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setMovies([]);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		fetchMovies("batman");
	}, [fetchMovies]);

	const handleEdit = (updatedMovie) => {
		setMovies((prev) =>
			prev.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
		);
	};

	const handleDelete = (id) => {
		setMovies((prev) => prev.filter((m) => m.id !== id));
	};

	const handleAdd = (newMovie) => {
		setMovies((prev) => [newMovie, ...prev]);
	};

	return (
		<MoviesContext.Provider
			value={{
				movies,
				loading,
				fetchMovies,
				handleDelete,
				handleEdit,
				handleAdd,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};