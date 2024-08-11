import { useEffect, useState } from "react"

import Swal from 'sweetalert2';
import axios from 'axios'
// import '../css/cust.css'


function Cust() {
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [user, setUser] = useState([])
    const [cust, setcust] = useState([])
    const [con, setCon] = useState(false);
    
    
    
    //for customer display
    const [cmail, setCmail] = useState('');
    const [cnum, setCnum] = useState('');
    const [creg, setCreg] = useState('');
    const [cstat, setCstat] = useState('');


    useEffect(() => {
        axios.get('https://bike-service-server-nu.vercel.app/owner/view')
            .then((user) => {
                setUser(user.data)
            }).catch(err => console.log(err))

    }, [])





    const handlesubmit = async () => {
        const mail_id = mail;
        const p_no = phone;
        let a = 1;
        console.log(mail_id)
        console.log(p_no)

        user.map(user => {
            if (user.mail === mail_id && user.phone === p_no) {
                setCon('true')
                a = 0;
                console.log(user._id)

                setCmail(user.mail)
                setCnum(user.phone)
                setCreg(user.regnum)
                setCstat(user.stat)
                if(user.stat==="Completed"){
                    Swal.fire("Ready!!!","You have completed your bike service","sucess");
                }
            }
        })

        if (a == 1) {
            Swal.fire("Error!", "Can't find Mail with this Phone", "error")
        }
    }



    return (<>



        {

            con === false && (<form className="forms">
                <label>Enter youe mail</label><br />
                <input type="text" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} /><br />

                <label>Enter youe Mobile Number</label><br />
                <input type="text" placeholder="Reg.No" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                <button type="button" onClick={handlesubmit}>Find</button>


            </form>)
        }

        {
            con && (<>
                <table>
                    <thead>
                    <tr>
                        <th>Mail</th>
                        <th>Phone number</th>
                        <th>Reg number</th>
                        <th>Stauts</th>
                    </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td>{cmail}</td>
                                    <td>{cnum}</td>
                                    <td>{creg}</td>
                                    <td>{cstat}</td>
                                    
                                </tr>
                    
                    </tbody>
                </table>
            </>

            )
        }
    </>);
}

export default Cust;