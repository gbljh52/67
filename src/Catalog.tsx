import { useContext } from "react";
import { FavoritesContext } from "./FavoriteContext";
import BookCard from './BookСard'
import { useLoad } from "./hooks/useLoad";
import { getBooks } from "./api/api";
import RequestError from "./RequestError";

export default function Catalog() {
  const ctx = useContext(FavoritesContext);
  let {data, loading , error, retry} = useLoad(getBooks, 1)

  if (loading) {
    return (
      <h1>Загрузка !!!</h1>
    )
  } else if (error) {
    return (
      <RequestError message={error?.message} handleClick={retry}  />
    )
  }
  return (
    <section> 
      <h2>Книги</h2>
      <div style={{display: 'flex', gap:'20px'}}>
        {data.map((book: any) => (
          <BookCard
            key={book.id}
            book={book}
            isFavorite={ctx?.favoriteIds.includes(book.id)}
            onAdd={ctx?.addFavorite}
          />
        ))}
      </div>
    </section>
  );
}