import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <div>
                <h3>Links</h3>
                <div><NavLink to="/PRE_JUNIOR">Pre Junior</NavLink></div>
                <div><NavLink to="/JUNIOR">Junior</NavLink></div>
                <div><NavLink to="/JUNIOR_PLUS">Junior+</NavLink></div>
            </div>
        </div>
    );
}

export default Header;
