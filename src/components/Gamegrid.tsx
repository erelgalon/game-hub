import React, { useEffect, useState } from 'react'
import apiClinet from '../services/api.clinet';
import {Text} from '@chakra-ui/react'

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
    <>
   {error && <Text>{error}</Text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default Gamegrid
