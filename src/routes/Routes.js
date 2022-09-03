import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Painel from '../pages/painel';
import RootArea from '../components/RootArea';
import CatalogoAll from '../components/CatalogoAll';
import CatalogoSecao from '../components/CatalogoSecao';
import Issue from '../components/Issue';
import Issues from '../components/Issues';
function Rotas() {
       return (
              <Routes >
                     <Route element={<Home />} >
                            <Route path="/" element={<RootArea />} />
                            <Route path="issues" element={<Issues />} />
                            <Route path="painel" element={<Painel />} />

                            <Route path="catalogo" >
                                   <Route index element={<CatalogoAll />} />
                                   <Route path=":catalogoId" >
                                          <Route index element={<CatalogoSecao />} />
                                          <Route path=":secaoId/issue" element={<Issue />} />
                                   </Route>
                            </Route>
                            <Route path="*" element={<><p>pagina nao encontrada</p></>} />
                     </Route>
                     <Route exact path="/login" element={<Login />} />
              </Routes>
       );
}
export default Rotas;