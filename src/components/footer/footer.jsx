import style from "../footer/footer.module.css";
function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>

                <div className={style.left}>
                    <h2>Film Vault</h2>
                    <p>Discover and manage your favorite movies 🎬</p>
                </div>



                <div className={style.right}>
                    <p>© {new Date().getFullYear()} Film Vault</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;