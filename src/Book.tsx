import { useContext } from "react"
import { FavoritesContext } from "./FavoriteContext"
import { useParams } from "react-router"
import { useLoad } from "./hooks/useLoad"
import { getBook } from "./api/api"
import RequestError from "./RequestError"

export default function Book() {

  const ctx = useContext(FavoritesContext)
  const {id} = useParams()
  const {data, loading, error, retry } = useLoad(getBook, Number(id))
  console.log(data)
  const numId = Number(id) -1
  console.log(id)

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
      <div>
        <h1>{data?.title}</h1>
        <h2>{data?.author}</h2>
        <button disabled={ctx?.favoriteIds.includes(numId)} onClick={() => {ctx?.addFavorite(numId)}}>{ctx?.favoriteIds.includes(numId) ? 'Добавлено в избранное' : 'Добавить в избранное'}</button>
      </div>
  )
}