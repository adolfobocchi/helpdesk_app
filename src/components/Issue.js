import React from 'react';
import { useLocation } from 'react-router-dom';

function Issue() {
    const location = useLocation();
    const nivel = location.state?.nivel;
    return (
    <div className='catalogArea'>
        <div className='catalogTitle'>
            <div className='markerItem'></div>
            <p className='title-small'>{nivel}</p>
        </div>
        <p>solicitacao</p>
        </div>
    );
}

export default Issue;