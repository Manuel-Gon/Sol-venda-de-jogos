import React from 'react'
import './LoginUsuario.css'
import { Link } from 'react-router-dom';


function LoginUsuario() {
  return (
    <div className='cadastro-usuario-i'>
      <Link className='button-voltar-cadastro' to='/'>Voltar</Link>
      <div className='card-cadastro-usuario'>

        <div className='div-titulo-text-usuario-cadastro'>
          <div className='h1-cadastro-usuario'>
            <h1>Login</h1>
          </div>

          <div className='h2-cadastro-usuario'>
            <h2>Seja Bem-Vindo de Volta</h2>
          </div>
        </div>

        <form className='div-inputs-cadastro-usuario'>

          <div>
            <p>Email:</p>
            <input
              type="email"
              placeholder='example@email.com'
              required
            />

          </div>

          <div>
            <p>Senha:</p>
            <input
              type="password"
              placeholder='Digite sua senha'
              required minLength={8}
              pattern='^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$'
              title='A senha deve ter no mínimo 8 caracteres, um número e um caracterer especial'
            />
          </div>

        </form>

        <div className='div-termos-cadastrar-usuario'>
            
           <div className='button-cadastrar'>
              <button  type='submit'>Cadastrar</button>
           </div>

        </div>


      </div>
    </div>
  )
}

export default LoginUsuario
