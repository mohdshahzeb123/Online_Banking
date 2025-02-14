import axios from "axios";
import React, { useState } from "react";

function CreateAcc() {

var [p,setPin]=useState()

var [n, setName] = useState()
var[l,setLname]=useState()  
    var [f, setFName] = useState()
    var [e, setEmail] = useState()
    var [ph, setPhone] = useState()
    var [g, setGender] = useState()
    var [c, setCountry] = useState()
    var [s, setState] = useState()
    var [ct, setCity] = useState()
    var [a, setAmount] = useState()
    var [ac, setACcount] = useState()

    var cAccount=async()=>{

        var res = await axios.get("http://localhost:3000/account")
 ac="SBI"
        console.log(res.data)
    var x=res.data.length
    if(x>0)
    {
    x=x+101
    ac=ac+x
    }
    else
    ac="SBI101"

        var dt = { "acno": ac, "pin": p, "E-mail": e, "Name": n, "Last name": l, "Phone": ph, "Gender": g, "State": s, "Country": c, "City": ct, "Amount": a }

        var res = await axios.post("http://localhost:3000/account", dt)
        alert("Account Created")
    }
    
    return (
<div>
            <div class="row" style={{"marginTop":"20px"}}>
            <div className="col-md-3"></div>
                <div class="col-md-3">
                First name
                    <input type="text" class="form-control" id="n" placeholder="First name" aria-label="First name" onInput={(e) => setName(e.target.value)}></input>
                </div>
                <div class="col-md-3">
                Last Name
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onInput={(e) => setLname(e.target.value)}></input>
                </div>
            </div>
{/* E-mail */}
                   <div class="row" style={{"marginTop":"20px"}}>
            <div className="col-md-3"></div>
                <div class="col-md-3">
                E-mail
                    <input type="text" class="form-control" placeholder="E-mail" aria-label="E-mail" onInput={(e) => setEmail(e.target.value)}></input>
                </div>
                <div class="col-md-3">
                Phone
                    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone" onInput={(e) => setPhone(e.target.value)}></input>
                </div>
            </div>
            {/* Pin */}
<br></br>
<div className="row">
    <div className="col-md-3"></div>
                <div className="col-md-6">
                    Create Pin
                    <input type="text" class="form-control" placeholder="Enter Pin" aria-label="Phone" onInput={(e) => setPin(e.target.value)}></input>
                </div>

</div>
<br></br>
{/* Gender */}

            <div className="row">
                <div className="col-md-3">
                </div>
        
                <div className="col-md-2">
                    Gender
                    <input type="text" className="form-control" onInput={(e) => setGender(e.target.value)}></input>
                </div>
              
            </div>
            <br></br>
{/* country */}

<div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-2">
        Countrty
                    <input type="text" className="form-control" onInput={(e) => setCountry(e.target.value)}></input>
    </div>
                <div className="col-md-2">
                    State
                    <input type="text" className="form-control" onInput={(e) => setState(e.target.value)}></input>
                </div>
                <div className="col-md-2">
                    City
                    <input type="text" className="form-control" onInput={(e) => setCity(e.target.value)}></input>
                </div>
</div>
{/* Amount */}
            <div className="row" style={{"marginBottom":"40px"}}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    Amount
                    <input type="text" class="form-control" onInput={(e) => setAmount(e.target.value)} placeholder="Amount" aria-label="Phone"></input>
                    <br></br>
                    <button className="btn btn-success" onClick={() => cAccount()}>Create Account</button>

                </div>


            </div>

        </div>
    )
}
export default CreateAcc;