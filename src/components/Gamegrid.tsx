import React, { useEffect, useState } from 'react'
import apiClinet from '../services/api.clinet';

interface Game{
    id: number;
    name: string;

}
interface FetchGamesResponse{ 
    count: number;
    results: Game[]
}

const Gamegrid = () => {
const [games, setGames] = useState<Game[]>([]);
const [error, setError] = useState('');

useEffect(() => {
apiClinet.get<FetchGamesResponse>('/games')
.then(res => setGames(res.data.results))
.catch(err => setError(err.message));
})

  return (
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default Gamegrid
