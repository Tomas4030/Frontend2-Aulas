import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    function incrementar() {
        const min = 1;
        const max = 10;
        setContador(contador + Math.floor(Math.random() * (max - min + 1)) + 1);
        console.log(contador);
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button style={{backgroundColor: '#cccccc', color: 'black'}} onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default Contador;
