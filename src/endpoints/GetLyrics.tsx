import axios from "axios";
import ServerAddr from "../api/server";
import Song from "../interfaces/Song";

export default function GetLyrics(
  setSong: (newSong: Song) => void,
  setLoading: (isLoading: boolean) => void
) {
  try {
    const url = ServerAddr + "/getRandomSong";
    axios.get(url).then((result) => {
      const song: Song = {
        songName: result.data.songName,
        artist: result.data.artist,
        lyrics: result.data.lyrics,
      };
      setSong(song);
      setLoading(false);
    });
  } catch (error) {
    setLoading(false);
    throw error;
  }
}
