import LyricGrid from './components/LyricGrid'
import GetLyrics from './endpoints/GetLyrics'
import './styles/App.css'

export default function App() {


  return (
    <>
      <div className="gamePanel">
        <button onClick={GetLyrics}>Test API</button> 
        <LyricGrid/>
      </div> 
    </> 
  )
}
