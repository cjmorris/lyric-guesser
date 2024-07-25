import "./PlayButton.css";
import GetLyrics from "../../endpoints/GetLyrics";
import Song from "../../interfaces/Song";

interface Props {
  updateSong: (song: Song) => void;
  setLoading: (isLoading: boolean) => void;
  resetGame: () => void;
  displayText: string;
}

export default function PlayButton(props: Props) {
  function buttonPressed() {
    props.resetGame();
    props.setLoading(true);
    GetLyrics(props.updateSong, props.setLoading);
  }

  return (
    <>
      <button className="playButton" onClick={buttonPressed}>
        {props.displayText}
      </button>
    </>
  );
}
