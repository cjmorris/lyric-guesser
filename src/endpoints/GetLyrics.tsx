import axios from "axios";
import ServerAddr from "../api/server";
import Song from "../interfaces/Song";

export default async function GetLyrics() {
  async function getLyric() {
    try {
      const url = ServerAddr + "/lyrics";
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw error;
    }
  }
  const result = await getLyric();
  const song: Song = {
    songName: result.songName,
    artist: result.artist,
    lyrics: result.lyrics,
  };
  return song;
}
