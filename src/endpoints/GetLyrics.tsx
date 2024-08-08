import axios from "axios";
import config from "../../config.json";
import Song from "../interfaces/Song";

export default function GetLyrics(
  setSong: (newSong: Song) => void,
  setLoading: (isLoading: boolean) => void
) {
  try {
    axios.get(config.server_url).then((result) => {
      console.log(result.data);
      const song: Song = {
        id: result.data.Id,
        songName: result.data.Name,
        artist: result.data.Artist,
        lyrics: result.data.Lyrics,
      };
      setSong(song);
      setLoading(false);
    });
  } catch (error) {
    setLoading(false);
    throw error;
  }
}
