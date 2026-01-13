import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation(); 
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="div-imagem-logo-adm">
         <img className ="imagemzinha-top-adm" src="/Logo-sol-games.png" alt="" />
     </div>
      

     <div className="butons-sidebar">
      <NavLink
  to="Dashboard"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  Dashboard
</NavLink>

<NavLink
  to="GestaoJogos"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  Gestão dos Jogos
</NavLink>

<NavLink
  to="GestaoCategorias"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  Gestão das Categorias
</NavLink>

<NavLink
  to="pedidos/vendas"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  Pedidos/Vendas
</NavLink>

<NavLink
  to="GestaoUsuarios"
  className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
>
  Gestão Usuarios
</NavLink>


      </div>
      <div className="icones-geral-adm-sidebar">
          <div className="icons-notification-adm-sidebar">
            <FaRegBell  
              size={30}
              color="#03374C"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>

          <div className="icon-search-adm-sidebar">
            <CiSearch
              size={30}
              color="#03374C"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>

          <div className="icon-perfil-adm-sidebar">
            <CgProfile
              size={30}
              color="#03374C"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/PerfilAdm")}
            />
          </div>
        </div>
    </div>
  );
}