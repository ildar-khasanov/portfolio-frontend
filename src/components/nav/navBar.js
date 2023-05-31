import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

import "./style.css";

const NavBar = () => {
    const isAuth = useSelector((state) => state.auth);

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        khasanov.dev
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className="nav__login">
                            <NavLink to="/login">Sign In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
