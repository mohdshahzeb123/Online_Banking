import React, {useState}from "react";
import axios from "axios";
function Balance() {
  

    var [ac, setACcount] = useState()
    var [p, setPin] = useState()
    var [msg, setMsg] = useState()
    var checkbal=async()=>{
        var res = await axios.get("http://localhost:3000/account")

        var dt = res.data.filter(item => item.acno == ac && item.pin == p)
        console.log(dt.length)
        if (dt.length > 0) {

            var camt = parseInt(dt[0].Amount)

            setMsg("Your balance is"+camt)



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
                {msg}
                <hr></hr>
                    Account Number
                    <input type="text" class="form-control" placeholder="Acc. no." aria-label="Phone" onInput={(e)=>setACcount(e.target.value)}></input>
                </div>

            </div>

            {/* Pin */}
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Pin
                    <input type="text" class="form-control" placeholder="Enter Pin" aria-label="Phone" onInput={(e) => setPin(e.target.value)}></input>
             <br></br>  <button className="btn btn-success" onClick={()=>checkbal()}>Check Balance</button>
                </div>

            </div>
    

        </div>
    )
}
export default Balance;