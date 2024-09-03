import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const PorductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg'>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='w-6 h-6 text-black'></XMarkIcon>
                </div>
            </div>            
        </aside>
    )

}

export default PorductDetail