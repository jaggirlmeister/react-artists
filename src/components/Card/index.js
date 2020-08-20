import React from 'react';

const Card = props => {
    const { avatar, name, genre } = props.data;
    return(
        <div className="card col_12">
            <img class="avatar_img" src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{genre}</p>
        </div>
    )
 }
 
 export default Card