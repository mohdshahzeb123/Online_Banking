import React, { useState } from "react";
import axios from "axios";
function ChangePin() {
var [ac,setACcount]=useState()
var[p,setPin]=useState()
var[np,setnewPin]=useState()
    var [msg, setMsg] = useState()

var changepin=async ()=>{
    var res = await axios.get("http://localhost:3000/account")
    
    var dt = res.data.filter(item => item.acno == ac && item.pin == p)
    console.log(dt.length)

    if (dt.length > 0) {
        var cid = dt[0].id

        var newData = { "acno": dt[0].acno, "pin": np, "Name": dt[0].Name, "phone": dt[0].phone, "Gender": dt[0].Gender, "Country": dt[0].Country, "Amount": dt[0].Amount }
        var res = await axios.put(`http://localhost:3000/account/${cid}`, newData)
        setMsg(" Pin changed")
    }
    else
        setMsg("Invalid Accout or pin")

    // alert("hello")
    // var dt = { "pin": np, }
  
}
    return (
        <div>



            {/* Account */}
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h3>{msg}</h3>  

                    Account Number
                    <input type="text" class="form-control" placeholder="Acc. no." aria-label="Phone" onInput={(e) => setACcount(e.target.value)}></input>
                </div>

            </div>

            {/* Pin */}
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                   Current Pin
                    <input type="text" class="form-control" placeholder="Enter Pin" aria-label="Phone" onInput={(e) => setPin(e.target.value)}></input>
                </div>

            </div>
            {/* Pin */}
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  New  Pin
                    <input type="text" class="form-control" placeholder="Enter Pin" aria-label="Phone" onInput={(e) => setnewPin(e.target.value)}></input>
                    <br></br>  <button className="btn btn-success" onClick={()=>changepin()}>Change Pin</button>
                </div>

            </div>

        </div>
    )
}
export default ChangePin;