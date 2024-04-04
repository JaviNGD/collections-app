import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";

const CollectionsCard = props => {
    const { date, name, totalItems } = props;

    return (
        <div className="flex justify-between items-center mb-3 border shadow-md w-80 px-6 py-4">
            <div>
                <div className="flex items-center gap-2"><FaRegFolderOpen /> {name}</div>
                <div className="flex items-center gap-2"><HiMiniComputerDesktop /> {totalItems}</div>
                <div className="flex items-center gap-2"><FaRegCalendarAlt /> {date}</div>
            </div>
            <MdOutlineKeyboardDoubleArrowRight className="w-7 h-7"/>
        </div>
    )
}

export default CollectionsCard