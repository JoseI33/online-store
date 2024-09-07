import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()


export const ShoppingCardProvider = ({children}) => {
    // Shopping Cart + Increment quantily
    const [count, setCount] = useState(0)

    // Product Detail + Ople/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen (true)
    const closeProductDetail = () => setIsProductDetailOpen (false)


    // Product Detail + Show product
    const [productToShow, setProductToShow] = useState({})
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext