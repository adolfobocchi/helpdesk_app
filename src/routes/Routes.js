import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import RouterHandle from '../auth/RouterHandle';
import Painel from '../pages/painel';

function Rotas() {
       return (
              <Routes >
                     <Route path="/" element={
                            <Home />
                     } />
                     <Route path="/catalogo/:item" element={
                            <Home />
                     } />
                     <Route path="/issues" element={
                            <Home />
                     } />
                     <Route path="/painel" element={
                            
                                   <Painel />
                     } />
                     <Route exact path="/login" element={<Login />} />
              </Routes>
       );
}
export default Rotas;