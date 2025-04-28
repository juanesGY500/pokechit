import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'
import Aleatorios from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Favoritos from './componentes/favoritos'
import Lista from './componentes/lista'
import Menu from './componentes/menu'
import Pokemon from './componentes/pokemon'
import Usuarios from './componentes/usuarios'
import Filtro from './componentes/filtro';

function App() {

  return (
    <Router>

      <Menu />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  
  )
}

export default App
