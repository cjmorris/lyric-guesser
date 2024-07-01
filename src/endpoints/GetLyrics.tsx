import axios from 'axios'
import { useEffect } from "react"
import az from "azlyrics-ext";

export default function GetLyrics(){
    const AZLyrics = require("azlyrics-ext");
    

    async function getLyric(){
        try {

            
            const {data} = await axios.get(
                'https://www.azlyrics.com/lyrics/queen/wewillrockyou.html', {
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*",
                    //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                    //     'Access-Control-Allow-Credentials':true,
                    // }
                });
        } catch (error) {
            
        }


    }
    getLyric()
    return <></>
}