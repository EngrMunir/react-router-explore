import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="menu">
                <span>My Websites</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
            </nav>
        </div>
    );
};

export default Header;