import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom"

const MainArtist = () => {  

    const { id } = useParams();

    const[artist, setArtist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data
                const artistFiltered = data.find(artist => artist._id === id )
                setArtist(artistFiltered)
            } catch (error){
                console.error('este es mi error', error);
            }
        }
        fetchData()
    }, []);

    return(
        <div className="grid inner artists">
            <h1 className="col_12">Lista de Artistas</h1>
            <h2 className="col_4"> {artist.name} </h2>
            <img className="avatar_img avatar_single col_4" src={artist.avatar} alt={artist.name} />
            <p className="col_4" >{artist.genre}</p>
        </div>

    )
 }

 export default MainArtist;