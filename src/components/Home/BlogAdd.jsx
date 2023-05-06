import React from "react";
import { Link } from "react-router-dom";

function BlogAdd(){
    return(
        <>
        <div className="blog_add">
            <img src={require("../../assets/past-papers-download-img.png")} alt="" className="blog_add_img" />
            <Link className="blog_add_text">000-000-000</Link>
        </div>
        </>
    )
}

export default BlogAdd;