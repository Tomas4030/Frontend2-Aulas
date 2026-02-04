import { useState } from "react";

function PerfilUser(){
    const [user, setuser] = useState({nome: "tomas", idade: 20});

    function addidade(){
        setuser({ ...user, idade: user.idade +1})
    }

    return(
        <div className="">
            <p>Nome: {user.nome}</p>
            <p>Idade {user.idade}</p>
            <button onClick={addidade}>Ficar mais velho</button>
        </div>
    )

}

export default PerfilUser