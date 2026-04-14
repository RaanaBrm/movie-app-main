# Movie Hub - React Routing Project

This project is a dynamic, multi-page movie management application built with React. It satisfies all the requirements by implementing advanced routing, global state management, and external API integration.

## 🔗 Project Links

- **Live Site:** https://movies-app-main-zeta.vercel.app/

## 🛠 Features & Requirements Met

### 1. Routing (React Router v6)

- **4 Main Routes:** Home, Movies (List), Add Movie, and About Us.
- **Dynamic Routing:** Implemented `movie/:id` to show details for specific movies.
- **Consistent Layout:** Used a shared `Wrapper` and `Navbar/Footer` structure across all pages to ensure a professional UI.

### 2. State & Data Management (VG Standard)

- **External API:** Data is fetched from the **OMDb API** to provide real-world movie information.
- **React Context API:** Global state managed via `MoviesContext`. This handles the logic for:
  - Adding new movies to the list.
  - Editing existing movie details.
  - Deleting movies from the collection.
- **Hooks:** Extensive use of `useState`, `useEffect`, `useContext`, and `useParams`.

### 3. Architecture & Styling

- **CSS Modules:** Used `*.module.css` for scoped styling to prevent global namespace pollution.
- **Responsive Design:** The layout is fully responsive, using **CSS Grid** for the movie gallery (3 columns on desktop, 1-2 on mobile) and **Flexbox** for the forms and navigation.
- **Directory Structure:** Organized into `components`, `pages`, `context`, and `styles` for better scalability.

## 📖 How to Run Locally

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## 📝 Self-Reflect (Project Plan)

My plan was to create a modern "Netflix-style" interface with a dark theme. I started by setting up the routing structure, followed by the Context API to ensure data could flow between the "Add" form and the "Movies" list. The final step was integrating the OMDb API to enrich the site with real movie data.
