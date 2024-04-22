import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import ShowDetail from "../../Components/ShowDetail/ShowDetail";
import CreateCollection from "../../Components/CreateCollection/CreateCollection";
import { CollectionsAppContext } from "../../Context/Context";
import { Link, useLocation } from "react-router-dom";

function Home() {
    const { items, searchByTitle, filteredItems, genres, searchByGenre, setSearchByGenre } = useContext(CollectionsAppContext);
    const location = useLocation();
    
    // Render search results or all items
    const renderView = () => {
        let itemsToRender = items;

        if (searchByTitle?.length > 0) {
            itemsToRender = filteredItems;
        }

        if (searchByGenre) {
            itemsToRender = itemsToRender.filter(item => item.genres.includes(searchByGenre));
        }

        if ((location.pathname === '/collections-app/' || location.pathname.match(`/collections-app/${searchByGenre}`)) && itemsToRender.length > 0) { // Check if path is '/collections-app/' or '/collections-app/genre' and render items
            return itemsToRender.map(item => (
                <Card key={item.id} data={item} />
            ));
        } else {
            return (
                <div className="flex flex-col col-span-5 items-center justify-center h-screen">
                    <div className="text-center text-2xl font-semibold m-8">No Results Found</div>
                    <img src="https://64.media.tumblr.com/2728681bd1e88d5c0929f5ef466705f1/79df1c24e77176e1-0f/s640x960/ab47fc7b6f552a3dc623cdcc13c38f88ea1be80a.gif" alt="Loading GIF" className="w-64 h-auto" />
                </div>
            );
        }
    };

    // Render genres buttons to filter items
    const renderGenres = () => {
        return (
            <div className="flex justify-center mx-4 my-1">
                <div className="flex justify-center flex-wrap">
                    {/* Add the "All Genres" button */}
                    <Link 
                        to="/collections-app/" 
                        className={`px-4 py-1 m-1 rounded-md border border-gray-300 hover:bg-blue-200 ${searchByGenre === null ? 'bg-blue-300 font-semibold' : 'bg-white'}`}
                        onClick={() => setSearchByGenre(null)}
                    >
                        All Genres
                    </Link>
                    {/* Render all genres */}
                    {genres.map(genre => (
                        <Link 
                            to={`/collections-app/${genre}`} 
                            key={genre} 
                            className={`px-4 py-1 m-1 rounded-md border border-gray-300 hover:bg-blue-200 ${searchByGenre === genre ? 'bg-blue-300 font-semibold' : 'bg-white'}`}
                            onClick={() => setSearchByGenre(genre)}
                        >
                            {genre}
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <Layout>
            {/* Render genre tags only when on the home page or a genre-specific page */}
            {(location.pathname === '/collections-app/' || location.pathname.match(`/collections-app/${searchByGenre}`)) && (
                <div className="flex justify-center space-x-4 mb-4">
                    {renderGenres()}
                </div>
            )}
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