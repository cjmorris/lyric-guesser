import { useState } from "react";
import "./PlayButton.css";
import GetLyrics from "../../endpoints/GetLyrics";
import Song from "../../interfaces/Song";

interface Props {
  updateSong: (song: Song) => void;
}

export default function PlayButton(props: Props) {
  const [pressed, setPressed] = useState(false);

  function buttonPressed() {
    setPressed(true);
    GetLyrics(props.updateSong);
  }

  return (
    <>
      {!pressed ? (
        <button className="playButton" onClick={buttonPressed}>
          Play
        </button>
      ) : (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}
