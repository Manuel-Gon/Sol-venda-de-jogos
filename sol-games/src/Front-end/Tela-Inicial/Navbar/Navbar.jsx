import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const [busca, setBusca] = useState("");
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <div className='navbar-sol-games'>

      <div className='logo-sol-games-nav'>
        <img className='logo-imagem-real' src="Logo sol games.png" alt="" />
      </div>

      <div className='botões-navegacao-sol-nav'>
        <Link to="" className='link-nav'>Inicio</Link>
        <Link to="" className='link-nav'>Todos os Jogos</Link>
        <Link to="" className='link-nav'>Categorias</Link>
        <Link to="" className='link-nav'>Suporte</Link>
      </div>

      <div className='perfil-pesquisa-nav-sol'>
        <div className="campo-pesquisa">
          <FiSearch className="icone-lupa" />
          <input
            type="text"
            placeholder="Buscar jogo..."
            className="barra-pesquisa-nav"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="area-perfil">
          <img
            src="Generic avatar.png"
            alt="Perfil"
            className="icone-perfil"
            onClick={() => setAbrirModal(!abrirModal)}
          />

          {abrirModal && (
            <div className="modal-perfil">
              <Link to="/cadastro">Cadastro</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Navbar;
