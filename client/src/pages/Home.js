
import {useNavigate} from "react-router-dom"

function Home()
{

    const navigate=useNavigate();
    const hand=()=>{
        navigate("/aathavan")
    }
    return(
        <>
        <center><h1>HOME</h1></center>

        <button onClick={hand}>submit</button>
        </>
       
    );
}
export default Home;