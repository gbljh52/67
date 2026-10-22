import { useContext } from "react";
import { books } from "./books";
import { FavoritesContext } from "./FavoriteContext";

export default function FavoritesPage() {

  const ctx = useContext(FavoritesContext)

  const selected = books.filter((book) => ctx?.favoriteIds.includes(book.id));

  return (
    <section>
      <h1>Избранное</h1>
      {selected.length === 0 && <p>Избранное пусто</p>}
      {selected.map((book) => (
        <article key={book.id}>
          <span>{book.title}</span>{" "}
          <button onClick={() => ctx?.removeFavorite(book.id)}>Удалить</button>
        </article>
      ))}
    </section>
  );
}