import "./GuessInput.css";

interface Props {
  guess: string;
  updateGuess: (newGuess: string) => void;
}

export default function GuessInput(props: Props) {
  return (
    <input
      value={props.guess}
      className="guessInputBox"
      onChange={(event) => props.updateGuess(event.target.value)}
    ></input>
  );
}
