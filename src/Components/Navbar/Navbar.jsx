import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CollectionsAppContext } from "../../Context/Context";
import { BiSolidMoviePlay } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const Navbar = () => {
    const activeStyle = 'font-semibold';
    const context = useContext(CollectionsAppContext);

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center">
                <li className="font-semibold text-xl">
                    <NavLink to="/"><BiSolidMoviePlay className="h-10 w-10 hover:text-blue-500"/></NavLink>
                </li>
                <div className="font-bold"><NavLink to="/">TV Collection</NavLink></div>
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
                <li className="flex">
                    <HiMiniComputerDesktop className="w-6 h-6 p-1"/>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;