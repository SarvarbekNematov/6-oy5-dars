import { Link } from "react-router-dom"
export const Header = () => {
    return <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/contact"}>Contact</Link>
    </div>
}