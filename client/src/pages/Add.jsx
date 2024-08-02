import React, { useState } from 'react';
import axios from "axios";
import '../css/add.css'


const Add = () => {
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [gen, setGen] = useState('No');
    const [oil, setOil] = useState('No');
    const [water, setWater] = useState('No');
    const [reg, setReg] = useState('');

    const handlesub = async () => {
        const regg="Registered"
        if(mail.length>0){

            await axios.post('http://localhost:3001/owner/create', {
                "mail": mail,
                "phone": phone,
                "regnum": reg,
                "s_oil": oil,
                "s_general": gen,
                "s_water": water,
                "stat":regg
                
            })
            .then(
                setMail(''),
                setPhone(''),
                setReg('')
            )
        }
    }

    return (
        <>
            <div className='boxx'>
                <form>
                    <label>Mail Id</label>
                    <input type='mail' value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Enter Your Mail' /><br />
                    <label>Phone Number</label>
                    <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your Phone Number'/><br />
                    <label>Register Number</label>
                    <input type='text' value={reg} onChange={(e) => setReg(e.target.value)}  placeholder='Enter Your Register Number'/><br />
                    <label>Oil service
                    <input type='checkbox' value={oil} onChange={(e) => setOil(e.target.value)} /></label><br />
                    <label>General service
                    <input type='checkbox' value={gen} onChange={(e) => setGen(e.target.value)} placeholder='aaa'/></label><br />
                    <label>Water service
                    <input type='checkbox' value={water} onChange={(e) => setWater(e.target.value)} /></label><br />

                <button onClick={handlesub} >Register</button>
                </form>

            </div>
        </>
    );
};

export default Add;
