import React, { Suspense, useContext } from 'react';
import Wrapper from '../../components/container/container';
import { Link } from "react-router-dom";
import styled from "./movies.module.css";
const Singlemovie = React.lazy(() => import('../../components/movie/singlemovie'));

import { MoviesContext } from "../../context/MoviesContext";

function Movies() {
    const { movies, loading, handleDelete } = useContext(MoviesContext);

    return (
        <div>
            <Wrapper>
                <div>
                    {/* تگ Navbar از اینجا حذف شد چون در Layout (App.jsx) تعریف شده است */}
                    <div className={styled.container}>
                        <div className={styled.wrapper}>
                            <div className={styled.articles}>
                                {loading ? <div>Loading...</div> : (
                                    movies.map((movie) => (
                                        <Suspense fallback={<div>Is Loading...</div>} key={movie.id}>
                                            <div className={styled.articleItem}>
                                                <Link to={`/movie/${movie.id}`}>
                                                    <Singlemovie article={movie} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(movie.id)}
                                                    className={styled.deleteButton}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </Suspense>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Movies;