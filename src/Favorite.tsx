import { useContext } from "react";
import { FavoritesContext } from "./FavoriteContext";
import { books } from "./books";
import Counter from "./Counter";

export default function Favorites() {

  const ctx = useContext(FavoritesContext)
  const selected = books.filter((book) => ctx?.favoriteIds.includes(book.id));

  return (
    <section>
      <h2>Избранное</h2>
      <Counter/>
      {selected.length === 0 && <p>Избранное пусто</p>}
      <ul>
        {selected.map((book) => (
          <li key={book.id}>
            {book.title}{" "}
            <button onClick={() => ctx?.removeFavorite(book.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </section>
  );
}