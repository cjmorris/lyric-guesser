import Song from "./interfaces/Song";
import LyricGrid from "./components/LyricGrid/LyricGrid";
import GetLyrics from "./endpoints/GetLyrics";
import { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        <Header />
        <LyricGrid song={song} />
        <Footer />
      </div>
    </>
  );
}
