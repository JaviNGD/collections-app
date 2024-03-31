import { useContext } from "react";
import { CollectionsAppContext } from "../../Context/Context";
import { IoMdAdd } from "react-icons/io";

const Card = (data) => {
    const context = useContext(CollectionsAppContext);

    // Send data to ShowDetail component
    const showDetail = () => {
        context.setDataToShow(data.data)
        context.openShowDetail()
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-61 rounded-lg shadow-md"
            onClick={showDetail}
        >
            <figure className="relative mb-2 w-full h-4.5/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.genres[0]}</span>
                
                <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={data.data.image?.medium} 
                    alt=""
                    />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
                    onClick={() => context.setCount(context.count + 1)}
                >
                    <IoMdAdd />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-lg font-medium p-2">{data.data.name}</span>
                <span className="text-sm font-light p-2">⭐ {data.data.rating.average}</span>
            </p>
        </div>
    )
}

export default Card;