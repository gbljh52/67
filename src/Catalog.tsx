import { books } from "./books";
import { useContext } from "react";
import { FavoritesContext } from "./FavoriteContext";
import BookCard from './BookСard'

export default function Catalog() {
  const ctx = useContext(FavoritesContext);

  return (
    <section>
      <h2>Книги</h2>
      <div style={{display: 'flex', gap:'20px'}}>
        {books.map((book) => (
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