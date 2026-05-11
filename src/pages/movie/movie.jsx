import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../../components/container/container';
import style from './movie.module.css';
import { MoviesContext } from '../../context/MoviesContext';

function Movie() {
    const { id } = useParams();
    const { movies, handleEdit } = useContext(MoviesContext);
    const [article, setArticle] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedArticle, setEditedArticle] = useState(null);

    useEffect(() => {
        if (movies && movies.length > 0) {
            const foundArticle = movies.find((movie) => String(movie.id) === String(id));
            if (foundArticle) {
                setArticle(foundArticle);
                setEditedArticle(foundArticle);
            } else {
                console.error("Can't find movie with id:", id);
            }
        }
    }, [id, movies]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedArticle((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveChanges = () => {
        handleEdit(editedArticle);
        setArticle(editedArticle);
        setIsEditing(false);
    };

    const getShortDescription = (text) => {
        if (!text) return "";
        const sentences = text.split('.');
        return sentences.slice(0, 2).join('.') + (sentences.length > 2 ? '...' : '');
    };

    if (!article) {
        return (
            <Wrapper>
                <div className="container">
                    <div className={style.placeholder}>Loading movie...</div>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div className="container">
                <div className={style.article}>
                    <div className={style.movieContainer}>
                        <div className={style.posterContainer}>
                            <img src={article.poster_path} alt={article.original_title} />
                        </div>

                        <div className={style.detailsContainer}>
                            {!isEditing ? (
                                <>
                                    <div className={style.description}>
                                        <p>{article.original_title}</p>
                                        <p>Release Date: {article.release_date}</p>
                                        <p>Rate: {article.vote_average}</p>
                                        <p>Overview: {getShortDescription(article.overview)}</p>
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className={style.button}
                                        >
                                            Edit
                                        </button>
                                    </div>

                                    {article.casts && article.casts.length > 0 ? (
                                        <div className={style.casts}>
                                            {article.casts.slice(0, 5).map((cast, idx) => (
                                                <div key={cast.id || idx} className={style.cast}>
                                                    <img src={cast.profile_path} alt={cast.name} />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>There is no photo for cast</p>
                                    )}
                                </>
                            ) : (
                                <div className={style.description}>
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        name="original_title"
                                        value={editedArticle.original_title}
                                        onChange={handleInputChange}
                                        className={style.input}
                                    />
                                    <label>Description</label>
                                    <textarea
                                        name="overview"
                                        value={editedArticle.overview}
                                        onChange={handleInputChange}
                                        className={style.textarea}
                                    ></textarea>
                                    <button onClick={saveChanges} className={style.button}>Save</button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className={style.button}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Movie;