import "./Menu.css";
import CloseButton from "react-bootstrap/CloseButton";

interface Props {
  songName: string;
  artist: string;
  hidden: boolean;
  closeMenu: () => void;
}

export default function Menu(props: Props) {
  return (
    <>
      <div className={props.hidden ? "menu" : "menu menu-open"}>
        <CloseButton className="close" onClick={props.closeMenu} />
        <div className="menu-content">
          <p>The song was:</p>
          <h2>{props.songName}</h2>
          <p>
            <i>{props.artist}</i>
          </p>
        </div>
      </div>
    </>
  );
}
