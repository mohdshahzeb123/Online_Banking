import React,{useState} from "react";
import axios from "axios";

function Summary() {
    var[ac, setACcount] = useState()
    var [p, setPin] = useState()
    var [msg, setMsg] = useState()
    var[fnewdt,setnewdt]=useState([])
    var getSummary = async () => {
        var res = await axios.get("http://localhost:3000/account")

        var dt = res.data.filter(item => item.acno == ac && item.pin == p)
        console.log(dt.length)
        if (dt.length > 0) {

            var newres = await axios.get("http://localhost:3000/mytrans")

var newdt=newres.data.filter(item=>item.acno)
if(newdt.length>0){
setnewdt(newdt)

}
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
                    <br></br>  <button className="btn btn-success" onClick={()=>getSummary()}>Get Summary</button>

                </div>

            </div>
            {/* table */}
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    {
                        fnewdt.map(row=>
                        <table><tbody><tr><td>Amount</td><td>Des</td></tr>
                        <tr><td>{row.amount}</td><td>{row.des}</td></tr>
                        </tbody></table>)
                    }

                </div>

            </div>

        </div>
    )
}
export default Summary;