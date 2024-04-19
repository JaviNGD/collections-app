import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CollectionsAppContext = createContext()

const apiUrl = 'https://api.tvmaze.com/shows';

export const CollectionsAppProvider = ({ children }) => {
    // Items from the API
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error(`An error has ocurred: ${error}`);
            }
        };
        fetchData();
    }, []);

    // Get items by title
    const [searchByTitle, setSearchByTitle] = useState('');

    // Filter items by title
    const [filteredItems, setFilteredItems] = useState([]);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.name.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    useEffect (() => { 
        if (searchByTitle) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }
    }, [items, searchByTitle]);

    // Total items collection cart - Count
    const [totalItems, setTotalItems] = useState(() => {
        const storedTotalItems = localStorage.getItem('totalItems');
        return storedTotalItems ? parseInt(storedTotalItems, 10) : 0;
    });

    // Save totalItems to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('totalItems', totalItems.toString());
    }, [totalItems]);

    // ShowDetail component - Open/Close
    const [isShowDetailOpen, setIsShowDetailOpen] = useState(false)
    const openShowDetail = () => {setIsShowDetailOpen(true)}
    const closeShowDetail = () => {setIsShowDetailOpen(false)}

    // ShowDetail component - Data
    const [dataToShow, setDataToShow] = useState({})

    // Create collection state - open/close 'collection cart'
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(true)}
    const closeCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(false)}
    const toggleCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)}

    // Item detail - Show item detail
    const [itemToShow, setItemToShow] = useState({})

    // Collection cart - state
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    // Save cartItems to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Collection cart - Add / Delete item from cart
    const toggleItemInCollection = (event, data) => {
        event.stopPropagation()
        const itemIndex = cartItems.findIndex(item => item.id === data.id);
        if (itemIndex !== -1) {
            // If the item is in the cart, then we remove it
            const newCartItems = cartItems.filter(item => item.id !== data.id);
            setCartItems(newCartItems);
            setTotalItems(totalItems - 1);
        } else {
            // Else we add it to the cart
            setCartItems([...cartItems, data]);
            setTotalItems(totalItems + 1);
            openCheckoutSideMenu();
        }
    };

    // Collection cart - Delete item from cart
    const deleteItem = (event, id) => {
        event.stopPropagation()
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
        totalItems > 0 ? setTotalItems(totalItems - 1) : null
    }

    // Collection cart - handle create collection

    // Collection cart - create collection
    const [collection, setCollection] = useState(() => {
        const storedCollection = localStorage.getItem('collection');
        return storedCollection ? JSON.parse(storedCollection) : [];
    });

    // Save collection to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('collection', JSON.stringify(collection));
    }, [collection]);

    // Collection cart - Create Collection name
    const [collectionName, setCollectionName] = useState(() => {
        const storedCollectionName = localStorage.getItem('collectionName');
        return storedCollectionName || '';
    });
    
    // Save collectionName to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('collectionName', collectionName);
    }, [collectionName]);

    // If collection name or cart is empty, alert user else create collection
    const handleClickCreate = () => {
        if (collectionName === '') {
            alert('Please enter a collection name')
        } else if (cartItems.length === 0) {
            alert('Please add items to the collection')
        } else {
            handleCreate(collectionName)
        }
    }

    const handleCreate = (collectionName) => {
        const collectionId = uuidv4(); // Generate a unique id for the collection
        const collectionToAdd = {
            id: collectionId,
            date: new Date().toLocaleDateString(),
            name: collectionName !== '' ? collectionName : 'Collection',
            items: cartItems,
            totalItems: totalItems
        }
        setCollection([...collection, collectionToAdd])
        closeCheckoutSideMenu()
        closeShowDetail()
        setCollectionName('')
        setCartItems([])
        setTotalItems(0)
    }

    // Handle delete collection from local storage
    const handleDelete = (id) => {
        const newCollection = collection.filter(item => item.id !== id)
        setCollection(newCollection)
    }

    return (
        <CollectionsAppContext.Provider value={{
            items, 
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            totalItems,
            setTotalItems,
            isShowDetailOpen,
            setIsShowDetailOpen,
            openShowDetail,
            closeShowDetail,
            dataToShow,
            setDataToShow,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            toggleCheckoutSideMenu,
            itemToShow,
            setItemToShow,
            cartItems,
            setCartItems,
            toggleItemInCollection,
            deleteItem,
            collection,
            setCollection,
            collectionName,
            setCollectionName,
            handleClickCreate,
            handleCreate,
            handleDelete
        }}>
            {children}
        </CollectionsAppContext.Provider>
    )
}