import Song from "./interfaces/Song";
import LyricGrid from "./components/LyricGrid";
import GetLyrics from "./endpoints/GetLyrics";
import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [song, setSong] = useState<Song>({
    songName: "",
    artist: "",
    lyrics: [],
  });

  return (
    <>
      <div className="lyricGame">
        <button
          onClick={async () => {
            const apiResult = await GetLyrics();
            setSong(apiResult);
          }}
        >
          Test API
        </button>
        <div className="gamePanel">
          <LyricGrid song={song} />
        </div>
      </div>
    </>
  );
}
