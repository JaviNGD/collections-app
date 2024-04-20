import { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { CollectionsAppContext } from "../../Context/Context";
import { BiSolidMoviePlay } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const Navbar = () => {
    const activeStyle = 'font-semibold';
    const { searchByTitle, setSearchByTitle, totalItems, toggleCheckoutSideMenu, setSearchByGenre } = useContext(CollectionsAppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleKeyDown = (e) => {
        // Verify if the user pressed the Enter key
        if (e.key === 'Enter') {
            // If the search input is not empty and the user is not on the home page, navigate to the home page
            if (searchByTitle.trim() && location.pathname !== "/") {
                setSearchByGenre(null);
                navigate('/');
            }
        }
    };

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center">
            <li className="font-semibold text-xl">
                <NavLink to="/" onClick={() => setSearchByGenre(null)}>
                    <BiSolidMoviePlay className="h-10 w-10 hover:text-blue-500"/>
                </NavLink>
            </li>
            <div className="font-bold">
                <NavLink to="/" onClick={() => setSearchByGenre(null)}>TV Collection</NavLink>
            </div>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="border border-gray-300 rounded-md p-1 ml-8 w-60 outline-none"
                    value={searchByTitle}
                    onChange={(e) => setSearchByTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
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
                        to="/my-collections"
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
                        Sign out
                    </NavLink>
                </li>
                <li 
                    className="flex hover:text-blue-500 cursor-pointer"
                    onClick={toggleCheckoutSideMenu}
                >
                    <HiMiniComputerDesktop className="w-6 h-6 p-1"/>
                    <div>{totalItems}</div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;