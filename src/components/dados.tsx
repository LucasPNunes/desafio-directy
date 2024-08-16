import { useState } from "react";
import D6PNG from "../assets/D6.png"
import D10PNG from "../assets/D10.png"
import D12PNG from "../assets/D12.png"
import D20PNG from "../assets/D20.png"

import { Rolada } from "../App";

type DadosProps = {
    addRolada: (rolada: Rolada) => void
}

export function Dado6(props : DadosProps){
    const [value, setValue] = useState("?");
    const rollDice = async () => {
        const response = await fetch('http://localhost:8000/api/D6');
        const data = await response.text();
        setValue(data)
        props.addRolada({ dado: "D6", numero: data});
    }
    return(
        <div className='dado' style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{backgroundColor:"white", width:"318px", height:"318px", borderRadius:"24px"}}>
                <img src={D6PNG} alt="Dado6" style={{width:"200px", height:"200px",marginTop:"60px"}}/>
            </div>
            <div style={{display:"flex", backgroundColor:"white", width:"257px", height:"414px", justifyContent:"center", borderRadius:"24px", flexDirection:"column"}}>
                <p style={{color:"black", fontSize:"30px", marginTop:"20px"}}>Resultado:</p>
                <p style={{color:"black", fontSize:"70px"}}>{value}</p>
                <button 
                    onClick={() => rollDice()}
                    style={{marginBottom:"21px", marginLeft:"38px"}}
                >ROLAR</button>
            </div>
        </div>
    )
}

export function Dado10(props : DadosProps){
    const [value, setValue] = useState("?");
    const rollDice = async () => {
        const response = await fetch('http://localhost:8000/api/D10');
        const data = await response.text();
        setValue(data)
        props.addRolada({ dado: "D10", numero: data});
    }
    return(
        <div className='dado' style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{backgroundColor:"white", width:"318px", height:"318px", borderRadius:"24px"}}>
                <img src={D10PNG} alt="Dado10" style={{width:"200px", height:"200px",marginTop:"60px"}}/>
            </div>
            <div style={{display:"flex", backgroundColor:"white", width:"257px", height:"414px", justifyContent:"center", borderRadius:"24px", flexDirection:"column"}}>
                <p style={{color:"black", fontSize:"30px", marginTop:"20px"}}>Resultado:</p>
                <p style={{color:"black", fontSize:"70px"}}>{value}</p>
                <button 
                    onClick={() => rollDice()}
                    style={{marginBottom:"21px", marginLeft:"38px"}}
                >ROLAR</button>
            </div>
        </div>
    )
}

export function Dado12(props : DadosProps){
    const [value, setValue] = useState("?");
    const rollDice = async () => {
        const response = await fetch('http://localhost:8000/api/D12');
        const data = await response.text();
        setValue(data)
        props.addRolada({ dado: "D12", numero: data});
    }
    return(
        <div className='dado' style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{backgroundColor:"white", width:"318px", height:"318px", borderRadius:"24px"}}>
                <img src={D12PNG} alt="Dado12" style={{width:"200px", height:"200px",marginTop:"60px"}}/>
            </div>
            <div style={{display:"flex", backgroundColor:"white", width:"257px", height:"414px", justifyContent:"center", borderRadius:"24px", flexDirection:"column"}}>
                <p style={{color:"black", fontSize:"30px", marginTop:"20px"}}>Resultado:</p>
                <p style={{color:"black", fontSize:"70px"}}>{value}</p>
                <button 
                    onClick={() => rollDice()}
                    style={{marginBottom:"21px", marginLeft:"38px"}}
                >ROLAR</button>
            </div>
        </div>
    )
}

export function Dado20(props : DadosProps){
    const [value, setValue] = useState("?");
    const rollDice = async () => {
        const response = await fetch('http://localhost:8000/api/D20');
        const data = await response.text();
        setValue(data)
        props.addRolada({ dado: "D20", numero: data});
    }
    return(
        <div className='dado' style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{backgroundColor:"white", width:"318px", height:"318px", borderRadius:"24px"}}>
                <img src={D20PNG} alt="Dado20" style={{width:"200px", height:"200px",marginTop:"60px"}}/>
            </div>
            <div style={{display:"flex", backgroundColor:"white", width:"257px", height:"414px", justifyContent:"center", borderRadius:"24px", flexDirection:"column"}}>
                <p style={{color:"black", fontSize:"30px", marginTop:"20px"}}>Resultado:</p>
                <p style={{color:"black", fontSize:"70px"}}>{value}</p>
                <button 
                    onClick={() => rollDice()}
                    style={{marginBottom:"21px", marginLeft:"38px"}}
                >ROLAR</button>
            </div>
        </div>
    )
}