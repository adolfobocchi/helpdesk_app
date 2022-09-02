import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Catalog from '../../components/Catalog';
import Header from '../../components/Header';
import RecentHelp from '../../components/RecentHelp';

function Home() {
    let { item } = useParams();
    let location = useLocation();

    return (<>
        <Header />
        <div className='contentArea'>
            {location.pathname === '/' &&
                <>
                    <Card to="/catalogo/all" imagem={'#'} description={'Abrir Solicitação'} caption={'Como podemos te ajudar?'} />

                    <Card to="/issues" imagem={'#'} description={'Minhas Solicitações'} caption={'Visualizar todas as solicitações registradas'} />

                    <RecentHelp />
                </>
            }
            {location.pathname === '/catalogo/all' && 
                <Catalog url={'/catalogo/all'} title={'Abrir solicitação'}  />
            }

        </div>
    </>)
}

export default Home;