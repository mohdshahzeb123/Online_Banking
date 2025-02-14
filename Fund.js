import React, {useState}from "react";
import axios from "axios";
function Fund() {

    var [ac, setACcount] = useState()
    var [p, setPin] = useState()
    var [msg, setMsg] = useState()
    var [wamt, SetWamount] = useState()
    var [Amt, Setamount] = useState()
var [rac,SetRac]=useState()
    var deposit = async () => {
        var res = await axios.get("http://localhost:3000/account")

        var dt = res.data.filter(item => item.acno == ac && item.pin == p)
        var rdt = res.data.filter(item => item.acno == rac )

        console.log(dt.length)
        if (dt.length > 0&&rdt.length>0) {

            var camt = parseInt(dt[0].Amount)
if(camt<parseInt(Amt)){
setMsg("low balance")
}
else
            var famt = camt - parseInt(Amt)
            var cid = dt[0].id
            var newData = { "acno": dt[0].acno, "pin": dt[0].pin, "Name": dt[0].Name, "phone": dt[0].phone, "Gender": dt[0].Gender, "Country": dt[0].Country, "Amount": famt }
            var res = await axios.put(`http://localhost:3000/account/${cid}`, newData)
            
            var td = { "acno": ac, "amount": Amt, "date": new Date().toLocaleDateString(), "des": "Transfered" }
            var res = await axios.post(`http://localhost:3000/mytrans`, td)
            var reciverAmt = parseInt(rdt[0].Amount)

            setMsg("Deposited")
            var rfamt = reciverAmt + parseInt(Amt)
            var rcid = rdt[0].id
            var newRdata = { "acno": rdt[0].acno, "pin": rdt[0].pin, "Name": rdt[0].Name, "phone": rdt[0].phone, "Gender": rdt[0].Gender, "Country": rdt[0].Country, "Amount": rfamt }
            var res = await axios.put(`http://localhost:3000/account/${rcid}`, newRdata)
            
            var rtd = { "acno": rdt[0].acno, "amount": Amt, "date": new Date().toLocaleDateString(), "des": "Recieved" }
            var res = await axios.post(`http://localhost:3000/mytrans`, rtd)
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

                    Account Number
                    <input type="text" class="form-control" placeholder="Acc. no." aria-label="Phone" onInput={(e)=>setACcount(e.target.value)}></input>
                </div>

            </div>

            {/* Pin */}
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Pin
                    <input type="text" class="form-control" placeholder="Enter Pin" aria-label="Phone" onInput={(e) => setPin(e.target.value)} ></input>
                </div>

            </div>
            {/* Reciever Account */}
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                   Reciever Account Number
                    <input type="text" class="form-control" placeholder="Acc. no." aria-label="Phone" onInput={(e) => SetRac(e.target.value)}></input>
                </div>

            </div>

            {/* Amount */}
            <div className="row" style={{ "marginTop": "10px" }}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Deposit Amount
                    <input type="text" class="form-control" placeholder="Deposit Amount" aria-label="Phone" onInput={(e) => Setamount(e.target.value)}></input>
                    <br></br>
                    <button className="btn btn-success" onClick={() => deposit()}>Deposit</button>

                </div>
            </div>

        </div>
    )
}
export default Fund;