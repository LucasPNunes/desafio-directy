import { useState } from 'react'
import './App.css'
import { Dado6, Dado10, Dado20, Dado12 } from './components/dados'

export type Rolada = {
  dado: string,
  numero: string,
}

function App() {
  const [dado, setDado] = useState("D6")
  const [historico, setHistorico] = useState<Rolada[]>([])

  const addRolada = (rolada: Rolada) => {
    setHistorico([...historico, rolada])
  }

  const limparHistorico = () => {
    setHistorico([])
  }

  return (
    <div className='background'>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{display: "flex", flexDirection:"column"}}>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", marginBottom:"30px"}}>
            <button onClick={() => setDado("D6")}>D6</button>
            <button onClick={() => setDado("D10")}>D10</button>
            <button onClick={() => setDado("D12")}>D12</button>
            <button onClick={() => setDado("D20")}>D20</button>
          </div>
          {dado === "D6" && <Dado6 addRolada={addRolada}/>}
          {dado === "D10" && <Dado10 addRolada={addRolada}/>}
          {dado === "D12" && <Dado12 addRolada={addRolada}/>}
          {dado === "D20" && <Dado20 addRolada={addRolada}/>}
        </div>
        <div className='historico'>
          <p>Historico:</p>
          <div style={{overflowY:"auto", height:"490px"}}>
            {historico.map(({dado, numero}, index) => (
            <div key={index} style={{backgroundColor:"white", borderRadius: "8px"}}>
              <p style={{color: "black"}}>Dado: {dado}, Resultado: {numero}</p>
            </div>
            ))}
          </div>
          <button onClick={() => limparHistorico()} style={{height:"54px", width:"300px", marginTop:"12px", backgroundColor:"white", color:"black"}}>Limpar</button>
        </div>
      </div>
        
    </div>
  )
}

export default App
