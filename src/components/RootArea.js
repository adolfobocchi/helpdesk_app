import React from "react";
import Card from "./Card";
import RecentHelp from "./RecentHelp";

function RootArea() {
    return (
        <>
            <Card to="/catalogo" imagem={'#'} description={'Abrir Solicitação'} caption={'Como podemos te ajudar?'} />
            <Card to="/issues" imagem={'#'} description={'Minhas Solicitações'} caption={'Visualizar todas as solicitações registradas'} />
            <RecentHelp />
        </>
    )
}

export default RootArea;