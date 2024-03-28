import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'font-semibold';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink 
                        to="/account"
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/collections"
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My collections
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/sign-in"
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    📌 0
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;