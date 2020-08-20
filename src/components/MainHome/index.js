import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '../Card';

const MainHome = () => {

    const[artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('https://artists-api.vercel.app/artists');
                console.log(response.data);
                const data = response.data 
                setArtists(data)
            } catch (error){
                console.error('este es mi error', error);
            }
        }
        fetchData()
    }, []);

    return(
        <div className="grid inner artists">
            <h1 className="col_12">Lista de Artistas</h1>
            <div className="artists col_12">
                {artists.map(artist => <Card key={artist._id} data={artist}/>)}
            </div>
        </div>

    )
 }



/*

    const[contador, setContador] = useState(0);

    return(
        <main className="main">
            Main Content
                {`Main content ${contador}`}
                <button
                onClick={()=> setContador( contador + 1)}
                >
                    Click me Alicia!
                </button>
                <button
                onClick={()=> setContador( contador - 1)}
                >
                    Not so fast!
                </button>
                <button
                onClick={()=> setContador(0)}
                >
                    Try Again!
                </button>
                
        </main>
    )





 this.state = {
    contador: 0,
    user: ''
}
this.setState({
    contador:1
})

const [contador, setContador] = useState(0)
const [user, setUser] = useState('')
const [users, setusers] = useState([{name:'Lean',edad:'35'},{name:'Pepe',edad:'35'},{name:'Mike',edad:'35'}])
const { name, edad } = props
contador = 5; //ESTA SUPER MAL
setContador(5) //THIS IS THE RIGHT WAY
*/

 export default MainHome;