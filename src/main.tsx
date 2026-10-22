import { createRoot } from "react-dom/client";
import FavoritesProvider from "./FavoriteProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Book from "./Book";
import Header from "./Header";
import Favorite from "./Favorite";

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <Header />
      <FavoritesProvider>
      <Routes>
        <Route index element={<App />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      </FavoritesProvider>  
    </BrowserRouter>,
  
)
