import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import ShowDetail from "../../Components/ShowDetail/ShowDetail";
import CreateCollection from "../../Components/CreateCollection/CreateCollection";
import { CollectionsAppContext } from "../../Context/Context";

function Home() {
    const { items } = useContext(CollectionsAppContext)

    return (
        <Layout>
            Home 
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ShowDetail />
            <CreateCollection />
        </Layout>
    )
}

export default Home;