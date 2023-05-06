import React from "react";
import { Link } from "react-router-dom";
import blog from "../../blogcard";

function BlogEntry({blogheading,blogdate,blogdesc,blogmore,blogbottomlinks}){
    return(
        <>
        <div className="blog_entry">
            <div className="blog_entry_heading">{blogheading}</div>
            <div className="blog_entry_date"> {blogdate}</div>
            <div className="blog_entry_desc">{blogdesc}</div>
            <Link className="blog_entry_more">{blogmore}</Link>
            <div className="blog_entry_bottomlinks">📁{blogbottomlinks.map(item =>{
                return(
                    <Link className="blog_entry_bottomlink">{item}</Link>
                )
            })}</div>
        </div>
        </>
    )
}

export default BlogEntry;