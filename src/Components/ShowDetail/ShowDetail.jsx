import { useContext } from 'react';
import './showDetail.css';
import { IoClose } from "react-icons/io5";
import { CollectionsAppContext } from '../../Context/Context';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const ShowDetail = () => {
    const { dataToShow, isShowDetailOpen, closeShowDetail, cartItems, toggleItemInCollection } = useContext(CollectionsAppContext);
    const rating = dataToShow.rating?.average; // get rating

    // Verify if item is in cart
    const isInCart = cartItems.some(item => item.id === dataToShow.id);

    return (
        <div className={`${isShowDetailOpen ? 'flex' : 'hidden'} show-detail flex-col fixed border shadow-md rounded-lg bg-white/90`}>
            <div className='flex justify-between items-center pt-6'>
                <h2 className='font-medium text-xl pl-6'>Details</h2>
                <div className='pr-6'>
                    <IoClose 
                        className='h-6 w-6 text-black cursor-pointer hover:text-red-500'
                        onClick={() => closeShowDetail()}
                    />
                </div>
            </div>
            <div className="m-5">
                <div className='flex justify-between'>
                    <h2 className='font-bold text-xl pb-2'>
                        {dataToShow.name}
                        <span className={`${dataToShow.status === 'Ended' ? 'bg-red-100' : 'bg-green-100'} rounded-lg font-medium text-black text-xs px-3 py-0.5 m-2`}>{dataToShow.status}</span>
                    </h2>
                    <button onClick={(event) => toggleItemInCollection(event, dataToShow)} className='flex justify-center items-center bg-white shadow-md text-black w-6 h-6 rounded-full m-2'>
                        {isInCart ? <FaCheck className='text-green-500' /> : <IoMdAdd className='hover:text-green-500' />}
                    </button>
                </div>
                <div className='flex justify-between'>
                    <div>
                    {isShowDetailOpen ? dataToShow.genres.map((genre, index) => (
                        <span key={index} className="bg-blue-500/20 rounded-lg text-black text-xs px-3 py-0.5 m-1">
                        {genre}
                        </span>
                    )) : null}
                    </div>
                    <p className='font-semibold flex'>
                        Rating: {rating > 7 ? <FaStar className='h-6 w-6 p-1'/> : <FaStarHalfAlt className='h-6 w-6 p-1'/>} {rating}
                    </p>
                </div>
                 <div className='pt-5' dangerouslySetInnerHTML={{ __html: dataToShow.summary }} /> {/* Show summary with HTML tags */}
            </div>
            


        </div>
    )
}

export default ShowDetail;