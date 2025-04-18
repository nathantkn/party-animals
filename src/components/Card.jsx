import React from 'react'
import more from '../assets/more.png'
import { Link } from 'react-router-dom'
import '../styles/Card.css'


const Card = (props) =>  {

    return (
        <div className="Card">
            <Link to={'/edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
            <Link to={'/post/'+ props.id} className="card-link">
                <h2 className="title">{props.name}</h2>
                <h3 className="author">{props.superpower}</h3>
                <img className="avatar" src={props.avatar} />
            </Link>
        </div>
    );
};

export default Card;