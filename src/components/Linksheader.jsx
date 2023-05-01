import React from "react";
import { BrowserRouter, Link,NavLink, Route, Routes } from "react-router-dom";


function LinksHeader(){
    return(
        <>
        <div className="links_header">
            <div className="links_header_content">
                <div className="links_header_content_links">
                    <NavLink className="links_header_content_link" to="/">home</NavLink>
                    <NavLink className="links_header_content_link" to="/blog">blog</NavLink>
                    <NavLink className="links_header_content_link" to="/about">about</NavLink>
                    <NavLink className="links_header_content_link" to="/contact">contact</NavLink>
                    <NavLink className="links_header_content_link" to="/contact">contact</NavLink>
                    <NavLink className="links_header_content_link" to="/contact">contact</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default LinksHeader;