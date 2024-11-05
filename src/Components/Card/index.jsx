import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(products => products.id === id).length > 0

        if (isInCart) {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-green-700 w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
                </div>
            )
        } else {
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
                </div>
            )
        }
    }

   // w-46 h-60 rounded-lg mb-6 pertenece a la linea 44
   // w-full h-4/5 pertenece a la linea 47
   // h-full object-cover rounded-lg pertenece a la linea 50
   // flex justify-between pertenece a la linea 54

    return (
        <div
            className='bg-white cursor-pointer rounded-lg shadow-md overflow-hidden mb-4 transition-transform transform hover:scale-105'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                <img className="w-full h-48 object-cover" src={data.data.image} alt={data.data.category} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='p-2'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    )
}

export default Card 