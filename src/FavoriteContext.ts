import { createContext } from "react";

export type FavoritesContextValue = {
  favoriteIds: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextValue | null>(null);