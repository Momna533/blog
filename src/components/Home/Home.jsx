import React from "react";
import { Link } from "react-router-dom";
import BlogEntry from "../Home/BlogEntry"
import blog from "../../blogcard";
import BlogSearch from "./BlogSearch";
import BlogAdd from "./BlogAdd";
function Home(){
    return(
        <>
        <div className="blog">
            <div className="blog_content">
                <div className="blog_left">
                    <div className="blog_left_content">
                        {blog.map((item) =>{
                          return(
                            <BlogEntry 
                            blogheading={item.heading}
                            blogdesc={item.desc}
                            blogdate={item.date}
                            blogmore={item.more}
                            blogbottomlinks={item.bottomlinks}
                            />
                          )
                        })}
                    </div>
                </div>
                <div className="blog_right">
                    <div className="blog_right_content">
                        <BlogSearch />
                        <BlogAdd />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;