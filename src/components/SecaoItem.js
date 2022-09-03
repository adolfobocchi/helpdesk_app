import { useLocation, useNavigate } from "react-router-dom";

function SecaoItem({ item, nivel }) {
    const navigate = useNavigate();
    const location = useLocation();
    return (

        <div onClick={() => navigate(`${location.pathname}/${item._id}/issue`, {state: {data: item.secoes, nivel: `${nivel} > ${item.nome}`}})}className='catalogItemArea click'>
            <div className='catalogItemImg'>
                <img src='#' />
            </div>
            <div className='catalogItemDescriptionArea'>
                <div className='catalogItemTitle'>{item.nome}</div>
                <div className='catalogItemDescription'>
                    <p> {item.descricao}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SecaoItem;