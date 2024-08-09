import "./Menu.css";
import CloseButton from "react-bootstrap/CloseButton";

interface Props {
  songName: string;
  artist: string;
  hidden: boolean;
  won: boolean;
  closeMenu: () => void;
}

export default function FinishMenu(props: Props) {
  return (
    <>
      <div
        data-bs-theme="dark"
        className={props.hidden ? "menu" : "menu menu-open"}
      >
        <CloseButton className="close" onClick={props.closeMenu} />
        <div className="menu-content">
          {props.won ? (
            <p>Congratulations! You know all the words to:</p>
          ) : (
            <p>The song was:</p>
          )}
          <h2>{props.songName}</h2>
          <p>
            <i>{props.artist}</i>
          </p>
        </div>
      </div>
    </>
  );
}
