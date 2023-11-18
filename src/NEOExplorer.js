import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NEOExplorer.css';

const NEOExplorer = () => {
  const [neoData, setNeoData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [currentPage, setCurrentPage] = useState('https://api.nasa.gov/neo/rest/v1/neo/browse');

  const apiKey = 'SUA_API_KEY_NASA';

  useEffect(() => {
    fetchNEOData(currentPage);
  }, [currentPage]);

  const fetchNEOData = async (url) => {
    try {
      const response = await axios.get(url, {
        params: {
          api_key: apiKey,
        },
      });

      setNeoData(response.data.near_earth_objects);
      setNextPage(response.data.links.next);
      setPrevPage(response.data.links.prev);
    } catch (error) {
      console.error('Erro ao obter dados NEO:', error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  };

  return (
    <div className="neo-explorer">
      <h1>Objetos Próximos à Terra</h1>
      <div className="neo-list">
        {neoData.map((neo) => (
          <div key={neo.id} className="neo-card">
            <h2>{neo.name}</h2>
            <p>
              Diâmetro Estimado: {neo.estimated_diameter.kilometers.estimated_diameter_min} -{' '}
              {neo.estimated_diameter.kilometers.estimated_diameter_max} km
            </p>
            <p>Primeira Observação: {neo.orbital_data.first_observation_date}</p>
            <p>Última Observação: {neo.orbital_data.last_observation_date}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!prevPage}>
          Página Anterior
        </button>
        <button onClick={handleNextPage} disabled={!nextPage}>
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default NEOExplorer;
