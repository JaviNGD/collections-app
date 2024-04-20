import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Layout from "../../Components/Layout/Layout";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCalendarAlt, FaTrashAlt } from "react-icons/fa";

function Collection() {
    const { collection, handleDelete, setSearchByGenre } = useContext(CollectionsAppContext);
    setSearchByGenre(null);
    const navigate = useNavigate();

    // Find the collection with the id from the URL
    const currentPath = window.location.pathname;
    const id = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    let selectedIndex = (id === 'latest' ? collection?.length - 1 : collection?.findIndex(item => item.id === id));

    const handleClickDelete = () => {
        handleDelete(collection[selectedIndex].id);
        navigate('/my-collections');        
    }

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to='/my-collections' className="absolute left-0">
                    <IoIosArrowBack className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <div className="flex items-center font-semibold"><FaRegFolderOpen className="mr-2"/> {collection?.[selectedIndex]?.name}</div>
            </div>
            {collection?.[selectedIndex] && (
                <div className='flex flex-col relative'>
                    <div className="mb-2 bg-gray-50 p-5 w-80">
                        <div className="flex items-center"><HiMiniComputerDesktop className="mr-2"/> {collection?.[selectedIndex].totalItems}</div>
                        <div className="flex items-center pb-2 border-b-2 border-black"><FaRegCalendarAlt className="mr-2"/> {collection?.[selectedIndex].date}</div>
                        <FaTrashAlt onClick={handleClickDelete} className="absolute top-0 right-0 p-3 h-10 w-10 cursor-pointer hover:text-red-500" />
                    </div>
                    {collection?.[selectedIndex]?.items.map(item => 
                        <ItemCard key={item.id} data={item} />
                    )}
                </div>
            )}
        </Layout>
    )
}

export default Collection

