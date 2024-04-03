import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Layout from "../../Components/Layout/Layout"
import { IoIosArrowBack } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";

function Collection() {
    const { collection } = useContext(CollectionsAppContext);

    // Obtain the latest collection
    const latestCollection = collection.length > 0 ? collection.slice(-1)[0] : null;

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to='/my-collections' className="absolute left-0">
                    <IoIosArrowBack className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1>Collection</h1>
            </div>
            {latestCollection && (
                <div className='flex flex-col'>
                <p>
                    <div className="flex items-center"><FaRegFolderOpen className="mr-2"/> {latestCollection.name}</div>
                    <div className="flex items-center"><HiMiniComputerDesktop className="mr-2"/> {latestCollection.totalItems}</div>
                    <div className="flex items-center"><FaRegCalendarAlt className="mr-2"/> {latestCollection.date}</div>
                </p>
                    {latestCollection.items.map(item => 
                        <ItemCard key={item.id} data={item} />
                    )}
                </div>
            )}
        </Layout>
    )
}

export default Collection

