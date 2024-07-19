import Song from "./interfaces/Song";
import LyricGrid from "./components/LyricGrid/LyricGrid";
import GetLyrics from "./endpoints/GetLyrics";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Lyric from "./interfaces/Lyric";

export default function App() {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState<Lyric[]>([]);
  const [guess, setGuess] = useState("");

  useEffect(() => {
    GetLyrics(updateSong);
  }, []);

  function updateSong(song: Song) {
    setSongName(song.songName);
    setArtist(song.artist);
    const lyricArr: Lyric[] = [];
    song.lyrics.forEach((lyric) => {
      const newLyric: Lyric = {
        word: lyric,
        correctlyGuessed: false,
      };
      lyricArr.push(newLyric);
    });
    setLyrics(lyricArr);
  }

  function updateGuess(newGuess: string) {
    let newWordFound = false;
    const nextLyrics = lyrics.map((lyric) => {
      if (
        simplifyWord(lyric.word) === simplifyWord(newGuess) &&
        !lyric.correctlyGuessed
      ) {
        newWordFound = true;
        return {
          ...lyric,
          correctlyGuessed: true,
        };
      } else {
        return lyric;
      }
    });
    if (newWordFound) {
      setGuess("");
    } else {
      setGuess(newGuess);
    }
    setLyrics(nextLyrics);
  }

  function simplifyWord(word: string) {
    return word.toLowerCase();
  }

  function getScore() {
    let count = 0;
    lyrics.forEach((lyric) => {
      if (lyric.correctlyGuessed) count++;
    });
    return count;
  }

  return (
    <>
      <div className="lyricGame">
        <Header />
        <LyricGrid lyrics={lyrics} />
        <Footer
          guess={guess}
          updateGuess={updateGuess}
          score={getScore()}
          wordCount={lyrics.length}
        />
      </div>
    </>
  );
}
