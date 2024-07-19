import LyricGridTile from "./LyricGridTile";
import "./LyricGrid.css";
import Lyric from "../../interfaces/Lyric";

interface Props {
  lyrics: Lyric[];
}

export default function LyricGrid(props: Props) {
  return (
    <>
      <div className="lyricGrid">
        {props.lyrics.map(function (lyric) {
          return (
            <LyricGridTile
              word={lyric.word}
              correctlyGuessed={lyric.correctlyGuessed}
            />
          );
        })}
      </div>
    </>
  );
}
