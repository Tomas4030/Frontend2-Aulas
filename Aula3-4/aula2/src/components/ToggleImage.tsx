import { useState } from "react";

const ToggleImage = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <button onClick={handleToggle} style={{ marginBottom: '10px' }}>
                {isToggled ? 'Mostrar Imagem 1' : 'Mostrar Imagem 2'}
            </button>
            <div>
                {isToggled ? (
                    <img src="https://imgs.search.brave.com/aQxLYbOs52tFtmfu57IHhh0ankmhMi_g1Xg2AwaOc1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubGljZG4uY29t/L2Flcm8tdjEvc2Mv/aC9hYXp5cGk1YWh0/ejlnYm84Z2p6OHd3/eXdx" alt="Imagem 1" />
                ) : (
                    <img src="https://imgs.search.brave.com/AxKnPw22M780yhmrK_6s46sFuMyvBThhTvx-WOLnZ7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL3Yy/L0Q0RTAzQVFFYzI5/M2hNS1I1VEEvcHJv/ZmlsZS1kaXNwbGF5/cGhvdG8tc2NhbGVf/MjAwXzIwMC9CNEVa/bWJYTUFBSE1BYy0v/MC8xNzU5MjQ4MTcx/NDM5P2U9MjE0NzQ4/MzY0NyZ2PWJldGEm/dD1LQnRDUTlyblE0/bmthbXBDWUxTaWkx/RXV6NjRLUFFVT2lz/aUQxRk5MWTUw" alt="Imagem 2" />
                )}
            </div>
        </div>
    );
}

export default ToggleImage; 