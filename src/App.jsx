import * as starshipService from './services/starshipService.js'
import StarshipList from './components/StarshipList.jsx';
import StarshipSearch from './components/StarshipSearch.jsx';
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [starship, setStarship] = useState([]);

  useEffect( () => {
    const fetchStarshipList = async() => {
      const data = await starshipService.search('');
      setStarship(data.results);
    }
    fetchStarshipList();
  }, [])

  const fetchStarship = async(starshipInput) => {
    const data = await starshipService.search(starshipInput);
    setStarship(data.results);
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchStarship={fetchStarship}/>
      <StarshipList starship={starship}/>
    </main>
  );
}

export default App