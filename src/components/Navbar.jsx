import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex flex-row gap-x-6 m-6 h-20 items-center font-bold text-lg justify-end border-b-2 border-black-500">
            <Link to="/">Home</Link>
            <Link to="/owner">Owner</Link>
        </nav>
    )
}

export default Navbar;