import { createContext, useState, useEffect  } from 'react'

export const ShoppingCartContext = createContext()


export const ShoppingCardProvider = ({children}) => {

    // Shopping Cart + Increment quantily
    const [count, setCount] = useState(0)

    // Product Detail + Ople/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen (true)
    const closeProductDetail = () => setIsProductDetailOpen (false)

    // Checkout Side Menu + Ople/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (false)


    // Product Detail + Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart + Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart + Order
    const [order, setOrder] = useState([])

    // Get products 
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [search, setSearch] = useState(null)
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') /*https://api.escuelajs.co/api/v1/products*/
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, search) => {
        return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        if (search) setFilteredItems(filteredItemsByTitle(items, search))
    }, [items, search])

    console.log('filteredItems: ', filteredItems)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems,
            search,
            setSearch,
            filteredItems,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext