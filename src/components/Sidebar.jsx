import { NavLink } from "react-router-dom";
import Header from './Header'

const Sidebar = () => {

    return(
        <div>
            <aside className="sidebar">
                <Header/>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Sobre mi</NavLink>
                    <NavLink to="/skills">Habilidades</NavLink>
                    <NavLink to="/projects">Proyectos</NavLink>
                    <NavLink to="/education">Educacion</NavLink>
                    <NavLink to="/contact">Contacto</NavLink> 
                </nav>
                
            </aside>
        </div>
    )
}

export default Sidebar