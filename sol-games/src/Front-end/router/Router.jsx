import { createBrowserRouter } from "react-router-dom";
import TelaInicial from "../Tela-Inicial/TelaInicial";
import Layout from "../../Adm/components/Layout";
import PedidosVendas from "../../Adm/pages/PedidosVendas";
import GestaoJogos from "../../Adm/pages/GestaoJogos";
import GestaoCategorias from "../../Adm/pages/GestaoCategorias";
import Usuarios from "../../Adm/pages/Usuarios";
import ConfiguracoesSite from "../../Adm/pages/ConfiguracoesSite";
import Dashboard from "../../Adm/pages/Dashboard";
import CadastroUsuario from "../CadastroUsuario/CadastroUsuario";


const Router = createBrowserRouter([

{path: "/", element: <TelaInicial/>},
{path: "/CadastroUsuario", element: <CadastroUsuario/>},



{
        path: "/LayoutAdm",
        element: <Layout/>, 
        children: [
            { index: true, element: <Dashboard/> },
            { path: "Dashboard", element: <Dashboard/> },
            { path: "GestaoJogos", element: <GestaoJogos/> },
            { path: "GestaoCategorias", element: <GestaoCategorias/> },
            { path: "pedidos/vendas", element: <PedidosVendas/> },
            { path: "GestaoUsuarios", element: <Usuarios/> },
            { path: "ConfiguracoesSite", element: <ConfiguracoesSite/> },

           
        ], 
    }

])

export default Router