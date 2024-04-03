import Layout from "../../Components/Layout/Layout"
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard"
import { CollectionsAppContext } from "../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function MyCollections() {
    const { collection } = useContext(CollectionsAppContext);

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to='/' className="absolute left-0">
                    <IoIosArrowBack className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1>My Collections</h1>
            </div>
            {
                collection.map((collection, index) => (
                    <Link key={index} to={`/my-collections/${collection.id}`}>
                        <CollectionsCard key={index} date={collection.date} name={collection.name} totalItems={collection.totalItems} />
                        <MdOutlineKeyboardDoubleArrowRight />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyCollections