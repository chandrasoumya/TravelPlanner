import { useState } from "react";
import axios from "axios";

const Addplan = ({ onClose , mobile }) => {
    const [dest, setDest] = useState("");
    const [date, setDate] = useState(null);
    const [partners, setPartners] = useState("");

    const saveData = () => {
        return new Promise((resolve, reject) => {
            let planData = {
                Destination: dest,
                Date: date,
                TravelPartners: partners,
                Mobile: mobile
            };
            axios.post(`${window.location.origin}/plans/`, planData)
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    alert("We are facing some problem, please try again later: " + error.message);
                    reject(error);
                });
        });
    };

    const allFields = () => {
        return dest.trim() !== "" && date !== null && partners.trim() !== "" && mobile !== null;
    };

    const handleAddButtonClick = () => {
        if (!allFields()) {
            alert("Please enter all fields");
        } else {
            saveData()
                .then(() => onClose())
                .catch((error) => console.log(error.message));
        }
    };

    const handleCancelButtonClick = () => {
        onClose();
    };

    return (
        <div className="addplan" id="addplan" >
            <label >Destination</label>
            <input onChange={(e) => setDest(e.target.value)} type="text" />
            <label>Date</label>
            <input onChange={(e) => setDate(e.target.value)} type="date" />
            <label>Travel partners</label>
            <input onChange={(e) => setPartners(e.target.value)} type="text" />
            <br />
            <button onClick={handleAddButtonClick} id="add">Add</button>
            <br />
            <button onClick={handleCancelButtonClick} id="cancel">Cancel</button>
        </div>
    );
};

export default Addplan;
