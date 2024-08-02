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

    useEffect(() => {
        axios.get('http://localhost:3001/owner/view')
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
                axios.put('http://localhost:3001/customer/find/' + user._id)

                    .then((user) => {
                        setcust(user.data)
                    })
                    .catch((err) => {
                        console.log("error" + err)
                    })

            }
        })

        if (a == 1) {
            Swal.fire("Error!", "Wrong Username or password", "error")
        }
    }



    return (<>



        {

            con === false && (<form className="forms">
                <label>Enter youe mail</label><br />
                <input type="text" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} /><br />

                <label>Enter youe Registration</label><br />
                <input type="text" placeholder="Reg.No" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                <button type="button" onClick={handlesubmit}>Find</button>


            </form>)
        }

        {
            con && (<>
                <table>
                    <tr>
                        <th>Mail</th>
                        <th>Phone number</th>
                        <th>Reg number</th>
                        <th>Stauts</th>
                    </tr>
                    {
                        cust.map(cust => {
                            if(cust.stat==="Completed"){
                                Swal.fire("Ready!!!","You have completed your bike service","sucess");
                            }
                            return (

                                <tr>
                                    <td>{cust.mail}</td>
                                    <td>{cust.phone}</td>
                                    <td>{cust.regnum}</td>
                                    <td>{cust.stat}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </table>
            </>

            )
        }
    </>);
}

export default Cust;