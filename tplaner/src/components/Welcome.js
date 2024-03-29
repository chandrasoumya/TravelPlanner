import { useNavigate ,useLocation} from "react-router-dom";

const Welcome = ()=>{

    const navigate = useNavigate();
    const location = useLocation();
    const { mobile } = location.state || {};

    const handleClick = ()=>{
        navigate("/home", { state: {mobile: mobile} })
    }

    return(
        <div className="welcome">
        <div className="welcomeContainer">
            <h1>WELCOME</h1>
            <h3>TO T-PLANER</h3>
            <p>Now plan your holidays with your own Travel Planner</p>
            <span>Happy Trip</span>
            <br/><br/><br/><br/>
            <button onClick={handleClick}>Start Planning</button>
        </div>
        </div>
    )
}

export default Welcome;