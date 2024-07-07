import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

export function NavBar()
{
    return (
        <>
            <nav>
                <Link to={'/'}>
                    Swiftly Cuadernos
                </Link>
                <NavLink to={'/'}>Inicio                    
                </NavLink>
                <NavLink to={'/category/Poemarios'} className={({ isActive }) => isActive ? "active" : ""}>
                    Poemarios
                </NavLink>
                <NavLink to={'/category/Cuadernos'} className={({ isActive }) => isActive ? "active" : ""}>
                    Cuadernos
                </NavLink>
                <NavLink to={'/category/Personalizados'} className={({ isActive }) => isActive ? "active" : ""}>
                    Personalizados
                </NavLink>
                <NavLink to={'/Contacto'} className={({ isActive }) => isActive ? "active" : ""}>
                    Contacto
                </NavLink>
            </nav>
            <CartWidget />
        </>
    )
}