import Song from "./interfaces/Song";
import LyricGrid from "./components/LyricGrid/LyricGrid";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Lyric from "./interfaces/Lyric";
import Menu from "./components/Menu/Menu";
import PlayButton from "./components/PlayButton/PlayButton";
import JSConfetti from "js-confetti";

export default function App() {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState<Lyric[]>([]);
  const [guess, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (lyrics.length !== 0) {
      let noWordsLeft: boolean = true;
      lyrics.forEach((lyric) => {
        if (!lyric.correctlyGuessed) {
          noWordsLeft = false;
        }
      });
      if (noWordsLeft) {
        songComplete();
      }
    }
  }, [lyrics]);

  function updateSong(song: Song) {
    setSongName(song.songName);
    setArtist(song.artist);
    const lyricArr: Lyric[] = [];
    song.lyrics.forEach((lyric, index) => {
      const newLyric: Lyric = {
        id: index,
        word: lyric,
        correctlyGuessed: false,
        gaveUp: false,
      };
      lyricArr.push(newLyric);
    });
    setLyrics(lyricArr);
  }

  function updateGuess(newGuess: string) {
    if (!gameOver) {
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
  }

  function giveUp() {
    const nextLyrics = lyrics.map((lyric) => {
      if (!lyric.correctlyGuessed) {
        return {
          ...lyric,
          gaveUp: true,
        };
      } else {
        return lyric;
      }
    });
    setLyrics(nextLyrics);
    setGameOver(true);
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  function simplifyWord(word: string) {
    return word.toLowerCase().trim();
  }

  function getScore() {
    let count = 0;
    lyrics.forEach((lyric) => {
      if (lyric.correctlyGuessed) count++;
    });
    return count;
  }

  function setLoading(isLoading: boolean) {
    setShowLoading(isLoading);
  }

  function songComplete() {
    setGameOver(true);
    setWon(true);
    setShowMenu(true);
    const jsConfetti = new JSConfetti();
    jsConfetti
      .addConfetti({
        confettiColors: [
          "#ff0a54",
          "#ff477e",
          "#ff7096",
          "#ff85a1",
          "#fbb1bd",
          "#f9bec7",
        ],
        confettiRadius: 6,
        confettiNumber: 250,
      })
      .then(() => jsConfetti.clearCanvas());
  }

  function resetGame() {
    setSongName("");
    setArtist("");
    setLyrics([]);
    setGuess("");
    setGameOver(false);
    setShowMenu(false);
    setWon(false);
    setShowLoading(false);
  }

  return (
    <>
      <div className="lyricGame">
        <Header />
        {lyrics.length == 0 ? (
          <div className="newGameDiv">
            {showLoading ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <PlayButton
                setLoading={setLoading}
                updateSong={updateSong}
                displayText="Play"
                resetGame={resetGame}
              />
            )}
          </div>
        ) : (
          <>
            <LyricGrid lyrics={lyrics} />
            <Footer
              guess={guess}
              updateGuess={updateGuess}
              updateSong={updateSong}
              score={getScore()}
              wordCount={lyrics.length}
              giveUp={giveUp}
              gameOver={gameOver}
              resetGame={resetGame}
              setLoading={setLoading}
            />
          </>
        )}

        <Menu
          songName={songName}
          artist={artist}
          hidden={!showMenu}
          won={won}
          closeMenu={closeMenu}
        />
      </div>
    </>
  );
}
