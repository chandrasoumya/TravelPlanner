import axios from "axios";
import {MdDelete} from "react-icons/md"

const Plans = (props)=>{
    const handleDelete = ()=>{
        axios.delete(`${window.location.origin}/plans/${props.Id}`)
        .then(()=>
            console.log("Plan is deleted")
        )
        .catch((err)=>{
            console.error(err)
        })
    }

    return(
        <div className="plans">
            <div>
            <img src="./t.png"/>
            </div>
            <div>
            <h3>{props.destination}</h3>
            <p className="date">Date - {props.date.slice(0,10)}</p>
            <p className="partners">Partners - {props.partners}</p>
            </div>
            <MdDelete className="delete" onClick={handleDelete}/>
        </div>
    )
}

export default Plans;