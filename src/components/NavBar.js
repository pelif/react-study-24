import React from "react";

import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Forms from "../pages/Forms";
import FormInput from "../pages/FormInput";
import Textarea from "../pages/Textarea";
import Counter from "../pages/Counter";

import userContext from "../context/UserContext";
import Components from "../pages/Components";
import TodoList from "./TodoList";

function NavBarDOM() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    Studies <strong className="fs-3">React</strong>
                </NavLink>
             
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" element={<Home />}>Home</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link" element={<Blog />}>Blog</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" element={<Contact />}>Contact</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/forms" className="nav-link" element={<Forms />}>Forms</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/FormInput" className="nav-link" element={<FormInput />}>Form Input</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/textarea" className="nav-link" element={<Textarea />}>Textarea</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/counter" className="nav-link" element={<Counter />}>Counter</NavLink>
                        </li>                          
                        <li className="nav-item">
                            <NavLink to="/componentsStudy" className="nav-link" element={<Components />}>Components Study</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/todo" className="nav-link" element={<TodoList />}>Todo List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}   

const NavBar = () => { 

    let context = true;

    return (
        <userContext.Provider value={context}>
            <NavBarDOM />
        </userContext.Provider>
    );
}

export default NavBar;