import { useContext } from "react"
import { FavoritesContext } from "./FavoriteContext"
import { books } from "./books"
import { useParams } from "react-router"

export default function Book() {

  const ctx = useContext(FavoritesContext)
  const {id} = useParams()
  const numId = Number(id) -1
  console.log(id)

  const isIs = books.length <= numId 

  return (
    isIs? 
      <div>Не найдено</div>
      :
      <div>
        <h1>{books[numId]?.title}</h1>
        <h2>{books[numId]?.author}</h2>
        <button disabled={ctx?.favoriteIds.includes(numId)} onClick={() => {ctx?.addFavorite(numId)}}>{ctx?.favoriteIds.includes(numId) ? 'Добавлено в избранное' : 'Добавить в избранное'}</button>
      </div>
  )
}