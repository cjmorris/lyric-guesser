import GuessInput from "../GuessInput/GuessInput";
import Score from "../Score/Score";
import "./Footer.css";

interface Props {
  guess: string;
  updateGuess: (newGuess: string) => void;
  score: number;
  wordCount: number;
}

export default function Footer(props: Props) {
  return (
    <ul className="footer">
      <li>
        <GuessInput guess={props.guess} updateGuess={props.updateGuess} />
      </li>
      <li>
        <Score score={props.score} wordCount={props.wordCount} />
      </li>
    </ul>
  );
}
