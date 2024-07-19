import { useState } from "react";

interface Props {
  word: string;
  correctlyGuessed: boolean;
}

export default function LyricGridTile(props: Props) {
  return (
    <>
      <div className="lyricGridTile">
        {props.correctlyGuessed && props.word}
      </div>
    </>
  );
}
