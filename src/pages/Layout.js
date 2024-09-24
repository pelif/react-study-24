import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

export default class Layout extends Component {

    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </>
        );
    }
}