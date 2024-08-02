import { useParams } from "react-router-dom";

function Custview()
{

    const {id}= useParams()
    return(
        <>
        <p>{id}</p>
        <h1>cdf</h1>
        </>
        
       
    );
}
export default Custview;