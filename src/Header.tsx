import { useNavigate } from "react-router"
import { NavLink } from "react-router"

export default function Header() {

  return (
    <div>
      <NavLink to={"/"}>Книги</NavLink>
      <NavLink to={"/Favorite"}>Избранное</NavLink>
    </div>
  )
}