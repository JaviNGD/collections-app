import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Card = ({ data }) => {
    const { cartItems, setCartItems, setDataToShow, openShowDetail, totalItems, setTotalItems, openCheckoutSideMenu, deleteItem} = useContext(CollectionsAppContext);

    // Send data to ShowDetail component
    const showDetail = () => {
        setDataToShow(data)
        openShowDetail()
    }

    // Add item to collection
    const addItemToCollection = (event, itemData) => {
        event.stopPropagation()
        setTotalItems(totalItems + 1)
        setCartItems([...cartItems, itemData])
        openCheckoutSideMenu()
    }

    //
    const isInCart = cartItems.filter(item => item.id === data.id).length > 0

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-61 rounded-lg shadow-md"
            onClick={showDetail}
        >
            <figure className="relative mb-2 w-full h-4.5/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.genres[0]}</span>
                
                <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={data.image?.medium} 
                    alt={data.name}
                    />
                {
                    isInCart ? 
                    <div 
                        className="absolute top-0 right-0 flex justify-center items-center bg-white text-green-500 w-6 h-6 rounded-full m-2"
                        onClick={(event) => deleteItem(event, data.id)}
                    >
                        <FaCheck />
                    </div>
                    :
                    <div 
                        className="absolute top-0 right-0 flex justify-center items-center bg-white hover:text-green-500 w-6 h-6 rounded-full m-2"
                        onClick={(event) => addItemToCollection(event, data)}
                    >
                        <IoMdAdd />
                    </div>
                }
            </figure>
            <p className="flex justify-between">
                <span className="text-lg font-medium p-2">{data.name}</span>
                <span className="text-sm font-light p-2">⭐ {data.rating.average}</span>
            </p>
        </div>
    )
}

export default Card;