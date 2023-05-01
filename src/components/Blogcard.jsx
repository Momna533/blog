import React from "react";
import { BrowserRouter, Link,NavLink, Route, Routes } from "react-router-dom";

function Blogcard({heading,date,desc,more,bottomlinks}){
    return(
        <>
                <div className="blog_entry">
                    <div className="blog_entry_heading">{heading}</div>
                    <div className="blog_entry_date">{date}</div>
                    <div className="blog_entry_desc">{desc}</div>
                    <Link className="blog_entry_more" to="/">{more}</Link>
                    <p className="blog_entry_bottomlinks">
                        {bottomlinks.map(item =>{
                            return(
                                <Link className="blog_entry_bottomlink" to="/">📁 {item}</Link>
                            )
                        })}
                    </p>
                </div>
        </>
    )
}

export default Blogcard;