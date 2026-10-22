import { useState, type ReactNode } from "react";
import { FavoritesContext } from "./FavoriteContext";

type Props = { children: ReactNode };

export default function FavoritesProvider({ children }: Props) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function addFavorite(id: number) {
    setFavoriteIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function removeFavorite(id: number) {
    setFavoriteIds((prev) => prev.filter((x) => x !== id));
  }

  const value = { favoriteIds, addFavorite, removeFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}