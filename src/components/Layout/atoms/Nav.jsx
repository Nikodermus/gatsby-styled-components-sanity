import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/404">404</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
