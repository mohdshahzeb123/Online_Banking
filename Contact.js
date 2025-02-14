import React from "react";

function Contact() {

    return (

        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
<div className="row">
    Name
    <input type="text"></input>
</div>
                <div className="row">
                    E-mail
                    <input type="text"></input>
                </div>

                <div className="row">
                    Message
                 <textarea
                        rows={5}
                        cols={35}
                        placeholder={"Add your Message"}></textarea>   
 
                </div>
            </div>
            
       </div>
    )
}
export default Contact;