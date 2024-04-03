import { FaTrashAlt } from "react-icons/fa";

const ItemCard = props => {
    const { data, deleteItem } = props;

    return (
        <div className="flex justify-between items-center m-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={data.image?.medium} alt={data.name} />
                </figure>
                <p className="text-sm font-semibold">{data.name}</p>
            </div>
            {
                deleteItem ?
                <div className=' flex items-center gap-2 pr-6'>
                    <FaTrashAlt 
                        className='h-4 w-4 text-black cursor-pointer hover:text-red-500'
                        onClick={(event) => deleteItem(event, data.id)}
                    />
                </div>
                : null
            }    
        </div>
    );
}

export default ItemCard;