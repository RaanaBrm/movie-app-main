import { useContext, useState } from "react";
import Wrapper from "../../components/container/container";
import style from "./add.module.css";
import { MoviesContext } from "../../context/MoviesContext";
import defaultPoster from "../../assets/add.jpeg";

function Add() {
	const { movies, handleAdd } = useContext(MoviesContext);

	const getDate = () => {
		const date = new Date();
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${year}-${month}-${day}`;
	};

	const [movieData, setMovieData] = useState({
		original_title: "",
		overview: "",
		release_date: getDate(),
		vote_average: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMovieData({ ...movieData, [name]: value });
	};

	const addMovie = (event) => {
		event.preventDefault();

		if (!movieData.original_title || !movieData.overview) {
			alert("Please fill in Title and Description");
			return;
		}

		const newMovie = {
			...movieData,
			id: Date.now(),
			poster_path: defaultPoster,
		};

		handleAdd(newMovie);

		setMovieData({
			original_title: "",
			overview: "",
			release_date: getDate(),
			vote_average: "",
		});
	};

	return (
		<Wrapper>
			<div className={style.add}>
				<div className={style.container}>
					<div className={style.wrapper}>
						<h2>Add New Movie</h2>
						<form onSubmit={addMovie}>
							<h3>Title:</h3>
							<input
								type="text"
								name="original_title"
								value={movieData.original_title}
								onChange={handleChange}
								className={style.textInput}
							/>

							<h3>Release Date:</h3>
							<input
								type="date"
								name="release_date"
								value={movieData.release_date}
								onChange={handleChange}
							/>

							<h3>Rating:</h3>
							<input
								type="number"
								min={1}
								max={10}
								name="vote_average"
								value={movieData.vote_average}
								onChange={handleChange}
							/>

							<h3>Description:</h3>
							<textarea
								name="overview"
								value={movieData.overview}
								onChange={handleChange}
								className={style.textInput}
							></textarea>

							<div className={style.submitContainer}>
								<button
									className={style.submitButton}
									type="submit"
									aria-label="Add"
									tabIndex={0}
								>
									Submit Movie
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Add;