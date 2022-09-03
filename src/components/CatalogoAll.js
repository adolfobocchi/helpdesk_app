import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useAxios from '../services/useAxios';
import CatalogoItem from './CatalogoItem';
import Input from './Input';


function CatalogoAll() {

    const location = useLocation();

    const { response, loading, error } = useAxios({
        method: 'get',
        url: `/catalogo/all`,
        headers: JSON.stringify({ accept: '*/*' }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);
    const nivel = location.state?.nivel;

    return (
        <div className='catalogArea'>
            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <Outlet />
                    <div className='catalogTitle'>
                        <div className='markerItem'></div>
                        <p className='title-small'>{nivel}</p>
                    </div>
                    <div className='catalogSearch'>
                        <Input />

                    </div>
                    <div className='catalogItens'>
                        { data.map((catalogo, index) => (<CatalogoItem key={index} item={catalogo} nivel={nivel} />)) }

                    </div>
                </div>
            )}
        </div>
    );
}

export default CatalogoAll;