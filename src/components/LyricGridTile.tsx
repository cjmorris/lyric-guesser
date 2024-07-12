interface Props {
  word: string;
}

export default function LyricGridTile(props: Props) {
  return (
    <>
      <div className="lyricGridTile">{props.word}</div>
    </>
  );
}
