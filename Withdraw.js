import React, { useState } from "react";
import axios from "axios";

function Withdraw() {
    var [ac, setACcount] = useState()
    var [p, setPin] = useState()
    var [dt, setDt] = useState()
    var [msg,setMsg]=useState()
    var [wamt, SetWamount] = useState()
    var [Amt, Setamount] = useState()



     var withdraw=async()=>{
         var res = await axios.get("http://localhost:3000/account")
        
        var dt=res.data.filter(item=>item.acno==ac && item.pin==p  )
        console.log(dt)
        if(dt.length>0)
        {

            var camt=parseInt(dt[0].Amount)
            if(camt>=parseInt(Amt)){
                setMsg("Withdrawn") 
var famt=camt-parseInt(Amt)
var cid=dt[0].id
                var newData = { "acno": dt[0].acno, "pin": dt[0].pin, "Name": dt[0].Name, "phone": dt[0].phone, "Gender": dt[0].Gender, "Country": dt[0].Country, "Amount": famt }
                var res = await axios.put(`http://localhost:3000/account/${cid}`, newData)
               var  td = { "acno": ac, "amount": Amt, "date": new Date().toLocaleDateString() ,"des":"withdraw"}
                var res = await axios.post(`http://localhost:3000/mytrans`, td)

            }

else
setMsg("insufificent balance")           
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
                <br/>
                <hr/>
            <h3>{msg}</h3>
                <hr/>
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
                </div>

            </div>
            
            {/* Account */}
            <div className="row"  style={{"marginTop":"10px"}}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Withdraw Amount
                    <input type="text" class="form-control" placeholder="Withdraw Amount" aria-label="Phone" onInput={(e)=>Setamount(e.target.value)}></input>
                  <br></br>
                    <button className="btn btn-success" onClick={()=>withdraw()}>Withdraw</button>

                </div>
            </div>
            
        </div>
    )
} 
export default Withdraw;