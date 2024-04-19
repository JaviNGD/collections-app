import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import ShowDetail from "../../Components/ShowDetail/ShowDetail";
import CreateCollection from "../../Components/CreateCollection/CreateCollection";
import { CollectionsAppContext } from "../../Context/Context";

function Home() {
    const { items, searchByTitle, filteredItems } = useContext(CollectionsAppContext)

    const renderView = () => {
        const itemsToRender = searchByTitle?.length > 0
            ? filteredItems
            : items;
        
            if (itemsToRender?.length > 0) {
                return itemsToRender.map(item => (
                    <Card key={item.id} data={item} />
                ));
            } else {
                return (
                    <div className="flex flex-col col-span-5 items-center justify-center h-screen">
                        <div className="text-center text-2xl font-semibold m-8">No Results Found</div>
                        <img src="https://64.media.tumblr.com/2728681bd1e88d5c0929f5ef466705f1/79df1c24e77176e1-0f/s640x960/ab47fc7b6f552a3dc623cdcc13c38f88ea1be80a.gif" alt="Loading GIF" className="w-64 h-auto" />
                    </div>
                )
            }
    };

    return (
        <Layout>
            Home 
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    renderView()
                }
            </div>
            <ShowDetail />
            <CreateCollection />
        </Layout>
    )
}

export default Home;