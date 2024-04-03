import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Layout from "../../Components/Layout/Layout"
import { IoIosArrowBack } from "react-icons/io";

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
                    <h1>{latestCollection.name}</h1>
                    <p>{latestCollection.date}</p>
                    <p>{latestCollection.totalItems}</p>
                    {latestCollection.items.map(item => 
                        <ItemCard key={item.id} data={item} />
                    )}
                </div>
            )}
        </Layout>
    )
}

export default Collection

