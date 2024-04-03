import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";

const CollectionsCard = props => {
    const { date, name, totalItems } = props;

    return (
        <div className="flex justify-between items-center mb-3 border shadow-md w-80 px-6 py-4">
            <p>
                <div className="flex items-center"><FaRegFolderOpen className="mr-2"/> {name}</div>
                <div className="flex items-center"><HiMiniComputerDesktop className="mr-2"/> {totalItems}</div>
                <div className="flex items-center"><FaRegCalendarAlt className="mr-2"/> {date}</div>
            </p>
            <MdOutlineKeyboardDoubleArrowRight />
        </div>
    )
}

export default CollectionsCard