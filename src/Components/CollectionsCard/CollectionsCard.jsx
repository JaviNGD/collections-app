const CollectionsCard = props => {
    const { date, name, totalItems } = props;

    return (
        <div className="flex justify-between items-center mb-3 border shadow-md">
            <p>
                <span>{date}</span>
                <span>{name}</span>
                <span>{totalItems}</span>
            </p>
        </div>
    )
}

export default CollectionsCard