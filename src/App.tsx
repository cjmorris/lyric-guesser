import Song from "./interfaces/Song";
import LyricGrid from "./components/LyricGrid";
import GetLyrics from "./endpoints/GetLyrics";
import { useState, useEffect } from "react";
import "./styles/App.css";

export default function App() {
  const [song, setSong] = useState<Song>({
    songName: "",
    artist: "",
    lyrics: [],
  });

  useEffect(() => {
    GetLyrics(setSong);
  }, []);

  return (
    <>
      <div className="lyricGame">
        <div className="gamePanel">
          <LyricGrid song={song} />
        </div>
      </div>
    </>
  );
}
