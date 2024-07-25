import "./GiveUpButton.css";

interface Props {
  giveUp: () => void;
  gameOver: boolean;
}

export default function GiveUpButton(props: Props) {
  function confirmGiveUp() {
    if (window.confirm("Are you sure you want to give up?")) {
      props.giveUp();
    }
  }

  return (
    <button
      className="giveUpButton"
      onClick={confirmGiveUp}
      disabled={props.gameOver}
    >
      Give Up
    </button>
  );
}
