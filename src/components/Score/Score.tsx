import "./Score.css";

interface Props {
  score: number;
  wordCount: number;
}

export default function Score(props: Props) {
  return (
    <div className="score">
      {props.score}/{props.wordCount}
    </div>
  );
}
