import React from "react";
import Trade from '../assets/Trade-video.mp4';
function Main() {
    return (
        <div>
            <body className="bdy">
                <center>
                    <h1 className="b_main_h1"><b>Trade like a pro</b></h1><br></br>
                    <p className="b_main_p">Get the lowest fees, fastest transactions, powerful APIs, and more</p>
                    <video className="b_main_video" src={Trade}></video>
                </center>
            </body>
        </div>
    )
}

export default Main;