import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import ShoppingCartContext from '../../Context'
import './styles.css'

const PorductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='w-6 h-6 text-black cursor-pointer' onClick={() => context.closeProductDetail()}></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>{context.productToShow.price}</span>
            <span className='font-medium text-md'>{context.productToShow.title}</span>
            <span className='font-medium text-xs justify-center'>{context.productToShow.description}</span>
            </p>
        </aside>
    )

}

export default PorductDetail