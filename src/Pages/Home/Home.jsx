import { useEffect, useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import ShowDetail from "../../Components/ShowDetail/ShowDetail";
import CreateCollection from "../../Components/CreateCollection/CreateCollection";
import { CollectionsAppContext } from "../../Context/Context";

const apiUrl = 'https://api.tvmaze.com/shows';

function Home() {
    const { items, setItems } = useContext(CollectionsAppContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}`)
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.error(`An error has ocurred: ${error}`);
            }
        }
        fetchData()
    }, [])

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