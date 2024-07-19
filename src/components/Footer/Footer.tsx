import GuessInput from "../GuessInput/GuessInput";
import "./Footer.css";

interface Props {
  guess: string;
  updateGuess: (newGuess: string) => void;
}

export default function Footer(props: Props) {
  return (
    <div className="footer">
      <GuessInput guess={props.guess} updateGuess={props.updateGuess} />
    </div>
  );
}
