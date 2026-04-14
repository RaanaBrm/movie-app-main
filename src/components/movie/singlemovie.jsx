import style from "./singlemovie.module.css";

function Singlemovie({ article }) {
    return (
        <div className={style.movie}>
            <div className={style.singlemovie}>
                <img
                    className={style['singlemovie-img']}
                    src={article.poster_path}
                    alt={article.original_title || "No poster available"}
                />
                <div className={style.title}>
                    <p className={style.titleText}>{article.original_title}</p>
                </div>
            </div>
        </div>
    );
}

export default Singlemovie;