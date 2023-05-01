import React from "react";
import { BrowserRouter,Link } from "react-router-dom";

function Logoheader(){
    return(
        <>
        <div className="logo_header">
            <div className="logo_header_content">
                <Link className="logo_header_logo" to="/"><img src={require("../assets/blog logo.png")} alt="logo" width={"130px"} /></Link>
                <div className="logo_header_text">
                    <div className="logo_header_text_heading">VULMS Help</div>
                    <div className="logo_header_text_desc">Right Place of VU Solved Assignment, Quiz, GDB, Past Papers & Jobs</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Logoheader;