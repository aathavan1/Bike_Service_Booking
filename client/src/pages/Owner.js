import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2';
// import "../css/cust.css"



function Owner() {
    const navigate=useNavigate();
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');




    const clk = () => {
        if (uname === "aathavan" && pass==="123") {
            navigate("/Ownerview")
        }
        else{
            Swal.fire("Error!!","Wrong Username or Password","error")
        }
    }



    return (<div className="boxx">
        <center><h1>OWNER</h1></center>
                <form>
                    <label>Username</label><br />
                    <input type="text" placeholder="Enter your Username" onChange={(e) => setUname(e.target.value)} /><br />
                    <label>Password</label><br />
                    <input type="text" placeholder="Enter your Password" onChange={(e) => setPass(e.target.value)} /><br />
                <button 
                type="button"
                onClick={clk}>Button</button>
                </form>
            </div>
            
       
    );
}
export default Owner;