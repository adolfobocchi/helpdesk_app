import React from 'react';
import useAxios from '../services/useAxios';
import Input from './Input';

function CatalogItem() {
    return (
        <div className='catalogItemArea'>
            <div className='catalogItemImg'>
                <img src='#' />
            </div>
            <div className='catalogItemDescriptionArea'>
                <div className='catalogItemTitle'>Sistemas Operacionais</div>
                <div className='catalogItemDescription'>
                    <p> Sistemas que apoiam a operacionalização dos processos educacionais e
                        financeiros (contas a receber), como por exemplo: ofertas, cronograma de
                        aulas, sistemas para atendimento e ações de marketing com o
                        aluno/cliente pf e pj, matrícula, triagem de bolsas, diário de classe,
                        certificados e diplomas, cancelamento de matrícula, conta financeira do
                        cliente, cadastro de descontos e etc.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Catalog({ title }) {
    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/catalogo/all',
        headers: JSON.stringify({ accept: '*/*' }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        if (response !== null) {
            console.log(response);
            setData(response);
        }
    }, [response]);
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

                    <div className='catalogTitle'>
                        <div className='markerItem'></div>
                        <p className='title'>{title}</p>
                    </div>
                    <div className='catalogSearch'>
                        <Input />

                    </div>
                    <div className='catalogItens'>
                        <CatalogItem />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Catalog;