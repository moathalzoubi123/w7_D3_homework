import React , {useEffect, useState} from "react";
import SongsListBox from "../Components/SongsListBox";

const SongsBox = () => {

    const [songs, setSongs] = useState("") 


    const getSongs = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json()) 
        .then(songs => setSongs(songs))
    }

    useEffect(() => {

        getSongs(); 
    }, [])


return (

    <>

    
    
    <SongsListBox songs = {songs} /> 
    
    </>


)

} 


export default SongsBox; 


