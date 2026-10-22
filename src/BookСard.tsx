import { NavLink } from "react-router";

export default function BookCard({ book, isFavorite, onAdd }:any) {
  return (
    <section>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button disabled={isFavorite} onClick={() => onAdd(book.id)}>
        {isFavorite ? "В избранном" : "В избранное"}
      </button>
      <NavLink to={`/books/${book.id}`}>Подробнее</NavLink>
    </section>
  );
}