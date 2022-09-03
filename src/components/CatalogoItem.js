import { useNavigate } from "react-router-dom";

function CatalogoItem({ item, nivel }) {
    const navigate = useNavigate();
    return (

        <div onClick={() => navigate(`/catalogo/${item._id}`, {state: {data: item.secoes, nivel: `${nivel} > ${item.nome}`}})}className='catalogItemArea click'>
            <div className='catalogItemImg'>
                <img src='#' />
            </div>
            <div className='catalogItemDescriptionArea'>
                <div className='catalogItemTitle'>
                    <p className="secundaria">{item.nome}</p></div>
                <div className='catalogItemDescription'>
                    <p className="caption">  {item.descricao}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CatalogoItem;