import { useState, useEffect } from 'react'
import './App.css'

function Usuario(recargar) {
  const [usuarios, setUsuarios] = useState([])

  async function obtenerusuarios() {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND+ '/usuarios', { credentials: 'include' })
    if (peticion.ok) {
      const repuesta = await peticion.json()
      setUsuarios(repuesta)
    }
  }

  async function eliminarusuario(id) {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND+ '/usuarios?id=' + id, { credentials: 'include', method: 'DELETE' })
    if (peticion.ok) {
      alert('usuario eliminado')
      obtenerusuarios();
    }
  }


  useEffect(() => {
    obtenerusuarios()
  }, [recargar])

  return (
    <>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(usuario => (
              <tr key={usuario.id}>
                <th>{usuario.id}</th>
                <th>{usuario.usuario}</th>
                <th>{usuario.clave}</th>
                <th>
                  <button
                    onClick={() => { eliminarusuario(usuario.id) }}
                  >x</button>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default Usuario
