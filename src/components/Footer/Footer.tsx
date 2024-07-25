import Song from "../../interfaces/Song";
import GiveUpButton from "../GiveUpButton/GiveUpButton";
import GuessInput from "../GuessInput/GuessInput";
import PlayButton from "../PlayButton/PlayButton";
import Score from "../Score/Score";
import "./Footer.css";

interface Props {
  guess: string;
  updateGuess: (newGuess: string) => void;
  updateSong: (song: Song) => void;
  score: number;
  wordCount: number;
  giveUp: () => void;
  gameOver: boolean;
  resetGame: () => void;
  setLoading: (isLoading: boolean) => void;
}

export default function Footer(props: Props) {
  return (
    <ul className="footer">
      <li>
        <GiveUpButton giveUp={props.giveUp} gameOver={props.gameOver} />
      </li>
      <li>
        {props.gameOver ? (
          <PlayButton
            setLoading={props.setLoading}
            updateSong={props.updateSong}
            displayText="Play Again"
            resetGame={props.resetGame}
          />
        ) : (
          <GuessInput guess={props.guess} updateGuess={props.updateGuess} />
        )}
      </li>
      <li>
        <Score score={props.score} wordCount={props.wordCount} />
      </li>
    </ul>
  );
}
