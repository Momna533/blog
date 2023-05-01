import React from "react";
import Blogcard from "./Blogcard";
import blog from "../blogcard";

function Blog(){
    return(
        <>
        <div className="blog">
            <div className="blog_left">
                {blog.map(item =>{
                return(
                <Blogcard 
                heading = {item.heading}
                date = {item.date}
                desc = {item.desc}
                more = {item.more}    
                bottomlinks = {item.bottomlinks}
                />
                )
                })}
            </div>
            <div className="blog_right">
                <div className="blog_search">
                    <div className="blog_search_heading">Search from website</div>
                    <form action="" className="blog_search_form">
                        <label htmlFor="">
                            <input className="blog_search_input" type="text" placeholder="Search..." />
                        </label>
                        <button className="blog_search_btn">search</button>
                    </form>
                </div>
                <div className="blog_add">
                    <img className="blog_add_img" src="https://plus.unsplash.com/premium_photo-1670251242882-88832ff776c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="add"  width={"250px"} height={"250px"}/>
                    <div className="blog_add_text">contact us at 000-000-00</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;