interface Props {
  word: string;
  correctlyGuessed: boolean;
  gaveUp: boolean;
}

export default function LyricGridTile(props: Props) {
  function getTileClass() {
    if (props.correctlyGuessed) {
      return "lyricGridTile correctTile";
    } else if (props.gaveUp) {
      return "lyricGridTile incorrectTile";
    } else {
      return "lyricGridTile";
    }
  }

  return (
    <>
      <div className={getTileClass()}>
        {(props.correctlyGuessed || props.gaveUp) && props.word}
      </div>
    </>
  );
}
