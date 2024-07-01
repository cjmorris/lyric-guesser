import axios from 'axios'
import { useEffect } from "react"
import ServerAddr from "../api/server"

export default function GetLyrics(){

    async function getLyric(){
        try {
            const url = ServerAddr + "/weatherforecast"
            
            const {data} = await axios.get(url, {
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*",
                    //     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    //     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                    //     'Access-Control-Allow-Credentials':true,
                    //}
                });
            console.log(data)
        } catch (error) {
            
        }


    }
    getLyric()
    return <></>
}