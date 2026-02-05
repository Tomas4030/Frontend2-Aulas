import { Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/">Frontend II</Link>
            </div>
            <nav className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/user">User</Link>
            </nav>
        </div>
    )
}

export default Navbar;