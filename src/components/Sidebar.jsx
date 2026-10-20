import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return(
        <div>
            <aside className="sidebar">
                <h2>Mi Portfolio</h2>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </aside>
        </div>
    )
}

export default Sidebar