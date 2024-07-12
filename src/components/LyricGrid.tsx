import Song from "../interfaces/Song";
import LyricGridTile from "./LyricGridTile";

interface Props {
  song: Song;
}

export default function LyricGrid(props: Props) {
  return (
    <>
      <div className="lyricGrid">
        {props.song.lyrics.map(function (lyric) {
          return <LyricGridTile word={lyric} />;
        })}
      </div>
    </>
  );
}
