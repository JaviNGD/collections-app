import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import ItemCard from "../../Components/ItemCard/ItemCard";
import Layout from "../../Components/Layout/Layout"

function Collection() {
    const { collection } = useContext(CollectionsAppContext);
    console.log(collection)
    return (
        <Layout>
            Collection
            <div className='flex flex-col'>
                {collection.length > 0 && collection?.slice(-1)[0].items.map(item => 
                    <ItemCard key={item.id} data={item} />
                )}
            </div>
        </Layout>
    )
}

export default Collection

