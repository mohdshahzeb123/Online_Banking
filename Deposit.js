import React, { useState } from "react";
import axios from "axios";
function Deposit() {
    var [ac, setACcount] = useState()
    var [p, setPin] = useState()
    var [dt, setDt] = useState()
    var [msg, setMsg] = useState()
    var [wamt, SetWamount] = useState()
    var [Amt, Setamount] = useState()

    var deposit=async()=>{
        var res = await axios.get("http://localhost:3000/account")

        var dt = res.data.filter(item => item.acno == ac && item.pin == p)
        console.log(dt.length)
        if (dt.length > 0) {

            var camt = parseInt(dt[0].Amount)
            
                setMsg("Deposited")
                var famt = camt + parseInt(Amt)
                var cid = dt[0].id
                var newData = { "acno": dt[0].acno, "pin": dt[0].pin, "Name": dt[0].Name, "phone": dt[0].phone, "Gender": dt[0].Gender, "Country": dt[0].Country, "Amount": famt }
                var res = await axios.put(`http://localhost:3000/account/${cid}`, newData)
                
            var td = { "acno": ac, "amount": Amt, "date": new Date().toLocaleDateString(), "des": "Deposited" }
            var res = await axios.post(`http://localhost:3000/mytrans`, td)

            
        }
        else
            setMsg("Invalid Accout or pin")

    }

    
    return (
        <div>



            {/* Account */}
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <hr></hr>
                <h3>{msg}</h3>
                <hr></hr>
                </div>

            </div>

            {/* Pin */}
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Pin
                    <input type="text" class="form-control" placeholder="Enter Pin" aria-label="Phone" onInput={(e) => setPin(e.target.value)}></input>
                </div>

            </div>

            {/* Account */}
            <div className="row" style={{ "marginTop": "10px" }}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Deposit Amount
                    <input type="text" class="form-control" placeholder="Deposit Amount" aria-label="Phone" onInput={(e) => Setamount(e.target.value)}></input>
                    <br></br>
                    <button className="btn btn-success" onClick={()=>deposit()}>Deposit</button>

                </div>
            </div>

        </div>
    )
}
export default Deposit;