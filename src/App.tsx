import Catalog from "./Catalog";
import Favorites from "./Favorite";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <header>
        <h1>Библиотека</h1>
        <Counter />
      </header>
      <main>
        <Catalog />
        <Favorites />
      </main>
    </>
  );
}