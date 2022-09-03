import React from 'react';
import { useNavigate } from "react-router-dom";
function Card(props) {
    let navigate = useNavigate();

    async function handleClick(e) {
        navigate(`${props.to}`, { state:{ nivel: props.description}, replace: false });
    }
    return (
        <div onClick={() => handleClick()} className="cardArea">
            <div className="cardHeader">
                <img src="#" />
            </div>
            <div className="cardDescription">
                <p className='secundaria'>{props.description}</p>
            </div>
            <div className="cardCaption">
                <p className='caption'>{props.caption}</p>
            </div>
        </div>
    );
}

export default Card;