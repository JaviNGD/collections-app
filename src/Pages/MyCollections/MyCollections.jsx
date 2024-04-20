import Layout from "../../Components/Layout/Layout";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
import { CollectionsAppContext } from "../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function MyCollections() {
    const { collection, handleDelete, setSearchByGenre } = useContext(CollectionsAppContext);
    setSearchByGenre(null);

    const handleClickDelete = (event, id) => {
        event.stopPropagation();
        handleDelete(id);
    };

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to='/' className="absolute left-0">
                    <IoIosArrowBack className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1 className="font-semibold">My Collections</h1>
            </div>
            {
                collection
                    .sort((a, b) => b.date - a.date)
                    .map((collection, index) => {
                        return (
                            <div key={index}>
                                <CollectionsCard 
                                    id={collection.id} 
                                    date={collection.date} 
                                    name={collection.name} 
                                    totalItems={collection.totalItems}
                                    handleDelete={(event) => handleClickDelete(event, collection.id)}
                                />
                            </div>
                        );
                    })
                    .reverse()
            }
        </Layout>
    )
}

export default MyCollections;