import { useContext } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center  top-0 fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mclothing'
                        onClick={() => context.setSearByCategory('mclothing')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Man Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        onClick={() => context.setSearByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/wclothing'
                        onClick={() => context.setSearByCategory('wclothing')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => context.setSearByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
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
                {context.count}
                </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar