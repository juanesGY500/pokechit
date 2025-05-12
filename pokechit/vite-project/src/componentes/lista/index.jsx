import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import Filtro from '../filtro';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../contexto/contexto';

function Lista() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');

  const { data, setData, tipoSeleccionado, setTipoSeleccionado } = useContext(AppContext);
  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  let resultados = data;

  if (busqueda.length >= 3 && isNaN(busqueda)) {
    resultados = data.filter(pokemon =>
      pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <div className="c-contenedor">
      <header className="c-header">
        <input
          type="text"
          placeholder="Buscar Pokémon"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="c-buscador"
        />
        <Filtro onTipoChange={handleTipoChange} />
      </header>

      <section className="c-lista">
        {resultados.map((pokemon, index) => {
          const id = pokemon.url.split("/")[6];
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02, type: 'spring', stiffness: 100 }}
              className="c-lista-pokemon"
              onClick={() => navigate(`/pokemon/${pokemon.name}`)}
              key={index}
            >
              <div className="c-lista-pokemon-card">
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} 
                  alt={`Pokémon ${pokemon.name}`}
                  width="120"
                  height="120"
                  loading="lazy"
                  className="pokemon-img"
                />
                <p className="pokemon-name">{pokemon.name}</p>
                <p className="pokemon-id">#{id.padStart(3, '0')}</p>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}

export default Lista;
