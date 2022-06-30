import React from "react"; 
import Song from './Song'


const SongsListBox = ({songs}) => {

    let dataArr = Array.from(songs);

    const songsItems = dataArr.map((song) => {


        return (

            <>

            <Song key = {song.feed.entry.id['im.id']} >  
               SongTitle: {song.feed.entry['title']}, SongArtist = {song.feed.entry['im:artist']} </Song> 
               </>

        )
    })

    return (

        <>
        {songsItems}
        
        </>


    )
}

export default SongsListBox; 



