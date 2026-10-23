import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return(
        <div>
            <aside className="sidebar">
                <h2>Mi Portfolio</h2>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Sobre mi</NavLink>
                <NavLink to="/skills">Habilidades</NavLink>
                <NavLink to="/projects">Proyectos</NavLink>
                <NavLink to="/education">Educacion</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
            </aside>
        </div>
    )
}

export default Sidebar