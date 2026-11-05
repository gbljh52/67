import { useContext } from "react";
import { FavoritesContext } from "./FavoriteContext";
import Counter from "./Counter";
import RequestError from "./RequestError";
import { useLoad } from "./hooks/useLoad";
import { getBooks } from "./api/api";

export default function Favorites() {
  const {data, loading , error, retry} = useLoad(getBooks, 1)
  if (loading) {
    return (
      <h1>Загрузка !!!</h1>
    )
  } else if (error) {
    return (
      <RequestError message={error?.message} handleClick={retry}  />
    )
  }
  const ctx = useContext(FavoritesContext)
  const selected = data.filter((book: { id: number; }) => ctx?.favoriteIds.includes(book?.id));

  return (
    <section>
      <h2>Избранное</h2>
      <Counter/>
      {selected.length === 0 && <p>Избранное пусто</p>}
      <ul>
        {selected.map((book: any) => (
          <li key={book.id}>
            {book.title}{" "}
            <button onClick={() => ctx?.removeFavorite(book.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </section>
  );
}