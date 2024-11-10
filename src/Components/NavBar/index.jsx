import { useContext, useState } from "react"
import { Bars4Icon, ShoppingBagIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const activeStyle = 'underline underline-offset-4'

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="flex justify-between items-center  top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
            <div className="flex items-center justify-between w-full">
                <div className="font-semibold text-lg">
                    <NavLink to='/'>Shopi</NavLink>
                </div>
                <button onClick={toggleMenu} className="md:hidden">
                        <Bars4Icon className="h-6 w-6"/> 
                </button>
                </div>
                <div className="hidden md:flex flex-col md:flex-row md:gap-4">
                    <ul className={`flex-col md:flex-row md:flex md:items-center md:gap-11 ${isMenuOpen? 'flex' : 'hidden'} md:flex`}>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mclothing'
                        onClick={() => {
                        context.setSearchByCategory(`men's clothing`)}
                        }
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/wclothing'
                        onClick={() => context.setSearchByCategory(`women's clothing`)}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
                <li className="text-black/60">
                    jose.imhoff.20@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
                <div>
                {context.cartProducts.length}
                </div>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar