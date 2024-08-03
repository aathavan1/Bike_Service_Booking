import { useEffect, useState } from "react";
import axios from "axios";
import "../css/ownerview.css"



function Ownerview() {
    const [user, setUser] = useState([]);
    const [option, setOption] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3001/owner/view')
            .then((user) => {
                setUser(user.data)
            }).catch(err => console.log(err))

    }, [])


    const handlesub = async (ids, upd) => {
        if(upd.length<2){
            upd="Registered"
        }
        await axios.put('http://localhost:3001/owner/update/' + ids, { "stat": upd })
        console.log(ids)
        console.log(upd)
        // window.location.reload(false)
        reload()
    }
    
    
    
    const handledel = async (ids) => {
        console.log(ids)
        await axios.delete('http://localhost:3001/owner/delete/' + ids)
        reload()
        
    }
    const reload=()=>{
        window.location.reload(false)

    }

    return (<>


        <table>
            <thead>
                <tr>
                    <th>Mail</th>
                    <th>Phone Number</th>
                    <th>Reg Number</th>
                    <th>Oil service</th>
                    <th>General Service</th>
                    <th>Water Service</th>
                    <th>Service Status</th>
                    <th>Update Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map(user => {
                        return (
                            <tr className="box" key={user._id}>

                                <td>{user.mail}</td>
                                <td> {user.phone}</td>
                                <td>{user.regnum}</td>
                                <td>{user.s_oil}</td>
                                <td>{user.s_general}</td>
                                <td> {user.s_water}</td>
                                <td>{user.stat}</td>
                                <td>
                                        <select value={user.stat} onChange={(e) => setOption(e.target.value)} key={user._id}>
                                            <option>Registered</option>
                                            <option>Ongoing</option>
                                            <option>Completed</option>
                                        </select>

                                <button type="submit" placeholder="submit" onClick={() => handlesub(user._id, option)} >Submit</button>
                                <button type="submit" placeholder="submit" onClick={() => handledel(user._id)} >delete</button>
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table >


    </>
    );
}
export default Ownerview;