import Song from "../../interfaces/Song";
import LyricGridTile from "../LyricGrid/LyricGridTile";
import PlayButton from "../PlayButton/PlayButton";

interface Props {
  setLoading: (isLoading: boolean) => void;
  updateSong: (song: Song) => void;
  resetGame: () => void;
  hidden: boolean;
}

export default function StartMenu(props: Props) {
  return (
    <>
      <div className={props.hidden ? "menu" : "menu menu-open"}>
        <div className="menu-content">
          <h2>How To Play</h2>
          <p>Uncover a song by typing in words that match the lyrics!</p>
          <ul className="leftalign">
            <li>
              <span>Words do not require punctation.</span> <br />
              <div className="centeralign">
                Instead of
                <LyricGridTile
                  word={"I've"}
                  correctlyGuessed={true}
                  gaveUp={false}
                />
                type
                <LyricGridTile
                  word={"Ive"}
                  correctlyGuessed={true}
                  gaveUp={false}
                />
              </div>
            </li>
            <li>
              <span>Capatilization of words does not matter</span>
              <br />
              <div className="centeralign">
                <LyricGridTile
                  word={"Hello"}
                  correctlyGuessed={true}
                  gaveUp={false}
                />
                is the same as
                <LyricGridTile
                  word={"hello"}
                  correctlyGuessed={true}
                  gaveUp={false}
                />
              </div>
            </li>
            <li>
              Don't forget filler sounds such as:
              <br />
              Oh, ah, uh, huh and mmm
            </li>
          </ul>
          <PlayButton
            setLoading={props.setLoading}
            updateSong={props.updateSong}
            displayText="Play"
            resetGame={props.resetGame}
          />
        </div>
      </div>
    </>
  );
}
