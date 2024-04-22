import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CollectionsAppContext } from "../../Context/Context";
import { IoClose } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import ItemCard from '../../Components/ItemCard/ItemCard'
import './createCollection.css'

const CreateCollection = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartItems, deleteItem, totalItems, setCollectionName, collectionName, handleClickCreate, loggedInUser } = useContext(CollectionsAppContext);

    // Handle change in input field for collection name
    const handleChange = (e) => {
        setCollectionName(e.target.value);
    }

    // Handle the creation of a collection
    // If the user is not logged in, return null, otherwise, call the handleClickCreate function
    const handleLoggedInUser = () => {
        if (loggedInUser === null) {
            return null;
        } else {
            handleClickCreate()
        }
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border shadow-md rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Create collection</h2>
                <div>
                    <IoClose className='h-6 w-6 text-black cursor-pointer hover:text-red-500' onClick={() => closeCheckoutSideMenu()} />
                </div>
            </div>
            <input
                type="text"
                placeholder="Collection name"
                value={collectionName}
                onChange={handleChange}
                className="w-90% m-4 p-2 border-b border-gray-300 focus:outline-none focus:border-black"
            />
            <div className='overflow-y-scroll'>
                {cartItems.map(item => <ItemCard key={item.id} data={item} deleteItem={deleteItem} />)}
            </div>
            <div className="flex p-5 text-lg flex-1 bg-white w-full">
                <HiMiniComputerDesktop className="w-7 h-7 mr-2"/>
                <p>Total programs: </p>
                <p className='font-semibold ml-2'>{totalItems}</p>
                <Link 
                    to={loggedInUser ? (collectionName !== '' && cartItems.length > 0 ? '/collections-app/my-collections/latest' : '#') : '/collections-app/login'} 
                    onClick={handleLoggedInUser} 
                    className='absolute right-0 mr-7 px-6 py-1 bg-blue-800 text-white rounded-lg hover:bg-blue-600 focus:outline-none'
                >
                    Create
                </Link>
            </div>
        </aside>
    )
}

export default CreateCollection;