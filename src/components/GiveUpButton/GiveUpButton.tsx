import "./GiveUpButton.css";

interface Props {
  giveUp: () => void;
}

export default function GiveUpButton(props: Props) {
  return (
    <button className="giveUpButton" onClick={props.giveUp}>
      Give Up
    </button>
  );
}
