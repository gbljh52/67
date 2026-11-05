import { useState, type ReactNode } from "react";
import { FavoritesContext } from "./FavoriteContext";

type Props = { children: ReactNode };

export default function FavoritesProvider({ children }: Props) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [books, setBooks] = useState<[]>([]);

  function addFavorite(id: number) {
    setFavoriteIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function removeFavorite(id: number) {
    setFavoriteIds((prev) => prev.filter((x) => x !== id));
  }

  function addBooks(data:any) {
    setBooks(data);
  }

  const value = { favoriteIds, addFavorite, removeFavorite, addBooks, books };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}