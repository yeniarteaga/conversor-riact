
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function conversor() {
  const [texto, setTexto] = useState('')
  const [voz, setvoz] = useState('')

  function cambiarTexto (evento) {
    setTexto(evento.target.value)
  }
  
  function textoAVoz() {
    const configuracion = new SpeechSynthesisUtterance(texto) 
    speechSynthesis.speak(configuracion) 
  }

  function vozATexto() {
    const agente = new webkitSpeechRecognition()
    agente.start()
      agente.onresult = resultado
  }
  function resultado (informacion) {
    console.log(informacion.results[0][0].transcript)
      setVoz(informacion.results[0][0].transcript)
      //informacion.results[0][0].transcript
  }

    return (
      <> 
        <h1>conversor TTS y STT</h1>
        <h2>conversor texto a voz</h2>
        <input type="text" value={texto} onChange={cambiarTexto} />
        <button onClick={textoAVoz}>Convertir</button>
        <h2>conversor voz a texto</h2>
        <button onclick={vozATexto}>Grabar</button>
        {voz}
      </>
    )
}

export default conversor
