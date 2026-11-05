export default function RequestError({message, handleClick}:{message?: string, handleClick: any}) {
  return (
    <div>
      <h1>ошибка: {message}</h1>
      <button onClick={handleClick}>повторить</button>
    </div>
  )
}