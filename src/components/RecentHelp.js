import { useNavigate } from "react-router-dom";

function RecentHelp() {
    const navigate = useNavigate();
    return (<>
        <div className="recentHelpArea">
            <div className="recentHeader">
                <p>Minhas solicitações recentes</p>
                <div className="sublinhado"></div>
            </div>
            <div className="recentList">

            </div>
            <div className="footerList">
                <p onClick={()=> navigate('issues')} className="captionBlack click">+ Visualizar todas as minhas solicitações</p>
            </div>
        </div>
    </>)
}

export default RecentHelp;