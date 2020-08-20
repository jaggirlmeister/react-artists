import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../Card';

const MainCategory = ({catId}) => {

    console.log("estoy en una category")
    const[artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data 
                const dataFiltered = data.filter(artist => artist.genre === catId)
                setArtists(dataFiltered)
            } catch (error){
                console.error('este es mi error', error);
            }
        }
        fetchData()
    }, [catId]);

    return(
        <div className="grid inner artists">
            <h1 className="col_12">Artistas de {catId} </h1>
            <div className="artists col_12">
                {artists.map(artist => <Card key={artist._id} data={artist}/>)}
            </div>
        </div>

    )
 }


 export default MainCategory;