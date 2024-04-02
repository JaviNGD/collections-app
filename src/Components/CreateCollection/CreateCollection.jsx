import { useContext } from 'react'
import { CollectionsAppContext } from "../../Context/Context";
import { IoClose } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import ItemCard from '../../Components/ItemCard/ItemCard'
import './createCollection.css'

const CreateCollection = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartItems, deleteItem, totalItems} = useContext(CollectionsAppContext)

    return (
        <aside
        className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border shadow-md rounded-lg bg-white/90`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Create collection</h2>
            <div>
            <IoClose
                className='h-6 w-6 text-black cursor-pointer hover:text-red-500'
                onClick={() => closeCheckoutSideMenu()}/>
            </div>
        </div>
        <input
            type="text"
            placeholder="Collection name"
            className="w-90% m-4 p-2 border-b border-gray-300 focus:outline-none focus:border-black"
        />
        <div className='overflow-y-scroll mb-16'>
            {
                cartItems.map(item => {
                    return (
                        <ItemCard key={item.id} data={item} deleteItem={deleteItem} />
                    );
                })
            }
        </div>
        <div className="flex p-5 text-lg absolute bottom-0 bg-white w-full">
                <HiMiniComputerDesktop className="w-7 h-7 mr-2"/>
                <p>Total programs: </p>
                <p className='font-semibold ml-2'>{totalItems}</p>
                <button className='absolute right-0 mr-7'>Create</button>
        </div>
        </aside>
    )
}

export default CreateCollection