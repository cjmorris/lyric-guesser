import axios from "axios";
import ServerAddr from "../api/server";
import Song from "../interfaces/Song";

export default function GetLyrics(setSong: (newSong: Song) => void) {
  try {
    const url = ServerAddr + "/lyrics";
    axios.get(url).then((result) => {
      const song: Song = {
        songName: result.data.songName,
        artist: result.data.artist,
        lyrics: result.data.lyrics,
      };
      setSong(song);
    });
  } catch (error) {
    throw error;
  }
}
