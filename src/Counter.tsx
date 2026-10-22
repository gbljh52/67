import { useContext } from "react"
import { FavoritesContext } from "./FavoriteContext"


export default function Counter() {
  const ctx = useContext(FavoritesContext);

  return (
    <div>
      {ctx?.favoriteIds.length}
    </div>
  )
}