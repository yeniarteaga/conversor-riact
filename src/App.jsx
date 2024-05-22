
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState} from 'react'
import Conversor from './conversor'

function App() {
  // hook,
  const [usuario, setUsuario] = useState('') //estado para gurdar usuario
  const [clave, setClave] = useState('') //estado para gurdar clave
  const [logueado, setLogueado] = useState(false) //estado para saber se el usuario esta logueado

  //funcion para cambiar el valor del usuario
  function cambiarUsuario (evento) {
    setUsuario(evento.target.value)
  }
  //funcion para cambiar el valor de la calve
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  //funcion para ingreasar al dar click en el boton
  function ingresar() {
    console.log('Usuario:', usuario)
    console.log('Clave:', clave)
    if (usuario === 'admin' && clave === 'admin') { // si el usuario y la clave son admin    
      alert("Datos correctos")
      setLogueado (true)
    } else { // si el usurio y la clave no son admin
      alert("Datos incorrectos")
    }
  }

  if (logueado) {
    return(<><Conversor/></>)
  }

  return (
  <>
    <h1>Inicio de sesión</h1>
      <label htmlFor='usuario'>Usuario:
        <input id='usuario' type="text" value={usuario} onChange={cambiarUsuario}/>
      </label>
      <label htmlFor="clave">Clave:
        <input id= 'calve'type="password"value={clave} onChange={cambiarClave}/>
      </label>
      <button type="submit" onClick={ingresar} >Ingresar</button>
    </>
  )
}

export default App
