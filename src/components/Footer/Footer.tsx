import GiveUpButton from "../GiveUpButton/GiveUpButton";
import GuessInput from "../GuessInput/GuessInput";
import Score from "../Score/Score";
import "./Footer.css";

interface Props {
  guess: string;
  updateGuess: (newGuess: string) => void;
  score: number;
  wordCount: number;
  giveUp: () => void;
}

export default function Footer(props: Props) {
  return (
    <ul className="footer">
      <li>
        <GiveUpButton giveUp={props.giveUp} />
      </li>
      <li>
        <GuessInput guess={props.guess} updateGuess={props.updateGuess} />
      </li>
      <li>
        <Score score={props.score} wordCount={props.wordCount} />
      </li>
    </ul>
  );
}
