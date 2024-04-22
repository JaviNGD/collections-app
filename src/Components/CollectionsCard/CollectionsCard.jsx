import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCalendarAlt, FaTrashAlt } from "react-icons/fa";

const CollectionsCard = props => {
    const { id, date, name, totalItems, handleDelete } = props;

    const handleNavigate = () => {
        window.location.href = `/collections-app/collection/${id}`;
    }

    return (
        <div className="flex justify-between items-center mb-3 border shadow-md w-80 px-6 py-4">
            <div>
                <div className="flex items-center gap-2"><FaRegFolderOpen /> {name}</div>
                <div className="flex items-center gap-2"><HiMiniComputerDesktop /> {totalItems}</div>
                <div className="flex items-center gap-2"><FaRegCalendarAlt /> {date}</div>
            </div>
            <div className="flex flex-col">
                <MdOutlineKeyboardDoubleArrowRight className="w-7 h-7 mb-3 cursor-pointer hover:text-blue-500" onClick={handleNavigate}/>
                <FaTrashAlt className="w-6 h-6 p-1 cursor-pointer hover:text-red-500" onClick={handleDelete}/>
            </div>
        </div>
    )
}

export default CollectionsCard