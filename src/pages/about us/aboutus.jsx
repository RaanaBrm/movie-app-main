import Wrapper from '../../components/container/container';
import style from "./aboutus.module.css";
import aboutVaultImage from '../../assets/aboutus.jpg';

function Aboutus() {
  return (
    <Wrapper>
      <div className={style.pageContainer}>
        <header className={style.header}>
          <h1 className={style.mainTitle}>About Film Vault</h1>
          <p className={style.subtitle}>Your Digital Movie Treasury</p>
          <div className={style.underline}></div>
        </header>
        <section className={style.contentSection}>
          <div className={style.about}>
            <h2>What is Film Vault?</h2>
            <p>
              Film Vault is a state-of-the-art **CRUD application** dedicated exclusively
              to cinema enthusiasts. Our platform empowers you to build, organize,
              and curate your own digital archive of movies and films.
            </p>
            <h2>Our Core Features</h2>
            <ul className={style.featuresList}>
              <li><strong>⭐ Create:</strong> Add new movies with detailed information.</li>
              <li><strong>⭐ Read:</strong> Explore our extensive movie list.</li>
              <li><strong>⭐ Update:</strong> Modify and keep your film data current.</li>
              <li><strong>⭐ Delete:</strong> Remove movies you no longer wish to track.</li>
            </ul>
          </div>
          <div className={style.imageBlock}>
            <img
              src={aboutVaultImage}
              alt="Film Vault Opening"
              className={style.aboutImage}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x400?text=Check+Asset+Path";
              }}
            />
          </div>
        </section>
        <footer className={style.missionBlock}>
          <p>
            Our mission is to simplify movie data management, making the process of
            building and navigating your film collection as enjoyable as watching
            the movies themselves. Welcome to your digital vault.
          </p>
        </footer>
      </div>
    </Wrapper>
  );
}

export default Aboutus;