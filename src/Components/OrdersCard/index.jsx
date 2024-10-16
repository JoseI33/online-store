import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
   

    return (
        <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg shadow-md bg-orange-600 hover:shadow-2xl">
           <div className="flex justify-between w-full">
            <p className="flex flex-col">
            <span className="font-light">01.10.24</span>
            <span className="font-light">{totalProducts} articles</span>
            </p>
            <p className="flex items-center gap-2">
            <span className="font-medium text-2xl">${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
            </p>
           </div>
        </div>
    )
}

export default OrdersCard