import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import ShoppingCartContext from '../../Context'
import OrderCard from '../../Components/OrderCard'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='w-6 h-6 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-2 overflow-y-auto'>
           {
            context.cartProducts.map(product => ( 
                <OrderCard
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                />
            ))
           }
            </div>
        </aside>
    )

}

export default CheckoutSideMenu