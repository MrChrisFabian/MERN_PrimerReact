import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Titulo from './components/Titulo.jsx'
import SubTitulo from './components/SubTitulo.jsx'
import List from './components/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo texto='Hello Dojo!' />
    <SubTitulo Texto='Things I need to do:' />
    <List cosas={["Aprender React", "Subir el Monte Everest", "Ganarle a Canelo en el ring", "Dormir mejor"]} />

  </React.StrictMode>,
)
