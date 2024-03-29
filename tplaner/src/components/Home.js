import Header from "./Header";
import Plans from "./Plans";
import Addplan from "./Addplan";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Home = () => {
    const [AddplanVisibility, SetAddplanVisibility] = useState(false);
    const [plans, setPlans] = useState([]);
    const location = useLocation();
    const { mobile } = location.state || {};

    const fetchPlans = () => {
        axios.get(`${window.location.origin}/plans/${mobile}`)
          .then((res) => {
            setPlans(res.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      };

      useEffect(() => {
        fetchPlans();
      },[]);

      useEffect(() => {
        const intervalId = setInterval(() => {
          fetchPlans();
        }, 100);
    
        return () => clearInterval(intervalId); 
      }, [fetchPlans]);

    const handleAddButtonClick = () => {
        SetAddplanVisibility(true);
    };

    const handleAddPlanClose = () => {
        SetAddplanVisibility(false);
    };

    return (
        <div className="home">
            {AddplanVisibility && <Addplan onClose={handleAddPlanClose} mobile={mobile}/>}
            <img src="./home-background.jpg" alt="background image" />
            <Header />
            <button id="addButton" onClick={handleAddButtonClick}>Add plan</button>
            <div className="homeContainer">
                {plans.map((plan, index) => (
                    <Plans key={index} destination={plan.Destination} date={plan.Date} partners={plan.TravelPartners} Id={plan._id}/>
                ))}
            </div>
        </div>
    );
};

export default Home;
