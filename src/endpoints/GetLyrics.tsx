import axios from 'axios'
import ServerAddr from "../api/server"

export default function GetLyrics(){

    async function getLyric(){
        try {
            const url = ServerAddr + "/lyrics"
            
            const {data} = await axios.get(url);
            console.log(data)
        } catch (error) {
            
        }


    }
    getLyric()
    return <></>
}