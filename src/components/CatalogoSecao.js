import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Input from './Input';
import SecaoItem from './SecaoItem';


function CatalogoSecao() {
    const location = useLocation();
    const data = location.state?.data;
    const nivel = location.state?.nivel;

    return (
        <div className='catalogArea'>
                    <Outlet />
                    <div className='catalogTitle'>
                        <div className='markerItem'></div>
                        <p className='title-small'>{nivel}</p>
                    </div>
                    <div className='catalogSearch'>
                        <Input />

                    </div>
                    <div className='catalogItens'>
                        { data.map((catalogo, index) => (<SecaoItem key={index} item={catalogo} nivel={nivel}/>)) }

                    </div>
        </div>
    );
}

export default CatalogoSecao;