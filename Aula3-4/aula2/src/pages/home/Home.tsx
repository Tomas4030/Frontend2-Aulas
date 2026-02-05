import Clock from "../../components/contadortime"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <h1>Home</h1>
            <button onClick={() => navigate("/about")}>Go to about</button>
            <Clock />
        </div>
    )
}

export default Home;