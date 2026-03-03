import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from "axios";

function App() {
  const [anime, setAnime] = useState([])

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get("/api/anime");
        console.log(response);
        console.log(response.data);
        setAnime(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAnime();
  }, [])



  return (
    <>
      <div>
        <h1>locat app testing</h1>
        {anime.map((item, index) => (
          <ul key={index}>
            <li>{item.animeName } || Main Character: {item.mainCharacter}
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default App
