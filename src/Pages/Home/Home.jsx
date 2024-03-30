import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";

const apiUrl = 'https://fakestoreapi.com';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/products`)
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
        </Layout>
    )
}

export default Home;