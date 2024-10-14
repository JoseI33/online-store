import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()


export const ShoppingCardProvider = ({ children }) => {

    // Shopping Cart + Increment quantily
    const [count, setCount] = useState(0)

    // Product Detail + Ople/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu + Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


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

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products') /*https://api.escuelajs.co/api/v1/products*/
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, search) => {
        return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, search, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, search)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        }

        if (!searchType) {
            return items
        }

        }

        useEffect(() => {
            if (search && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, searchByCategory))
            if (search && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, search, searchByCategory))
            if (!search && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, search, searchByCategory))
            if (!searchByCategory && !search) setFilteredItems(filterBy(null, items, search, searchByCategory))
        }, [items, search, searchByCategory])

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
                searchByCategory,
                setSearchByCategory
            }}>
                {children}
            </ShoppingCartContext.Provider>
        )
    }

    export default ShoppingCartContext