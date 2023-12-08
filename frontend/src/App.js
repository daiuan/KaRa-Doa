import axios from 'axios';
import React, { useState, useEffect } from "react";

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";

// const api = axios.create({
//     baseURL: 'http://localhost:3333/',
//     headers: { 
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// });


//Importar Imagens

import AddImg from './img/add.png';
import BannerImg from './img/banner.jpg';
import CampanhaImg from './img/campanha.jpg';
import HomeImg from './img/home.png';
import LogoImg from './img/logo.svg';
import SearchImg from './img/search.png';
import SupportImg from './img/support.png';


function App() {

 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="listar" element={<Listar />} />
         <Route path="cadastrar" element={<Cadastrar />} />
         <Route path="doacao" element={<Doar />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );

}


// Cabeçalho presente em todas as páginas
const Layout = () => {
 return (
   <>
     <header>
            <div class="container horizontal desk">
                <div class="horizontal">
                    <img src={LogoImg} alt="KaRa Doa"></img>
                    <input type="search" name="" id="" placeholder="Buscar campanha"></input>
                    <a href="">Criar</a>
                </div>
                <div class="horizontal">
                    <div class="menu horizontal">
                      <Link to="/">Início</Link>
                        <p>•</p>
                        <a href="">Suporte</a>
                    </div>
                    <div class="conta">
                        <a href="/cadastrar" class="btn2">Criar conta</a>
                        <a href="" class="btn">Entrar</a>
                    </div>
                </div>
            </div>

            <div class="container horizontal mobile">
                <div class="horizontal">
                    <img src={LogoImg} alt="KaRa Doa" id="logo"></img>
                    <img src={SearchImg} alt=""></img>
                    <a href=""><img src={AddImg} alt=""></img></a>
                </div>
                <div class="horizontal">
                    <div class="menu horizontal">
                        <a href="/"><img src={HomeImg} alt=""></img></a>
                        <p>•</p>
                        <a href=""><img src={SupportImg} alt=""></img></a>
                    </div>
                    <div class="conta">
                        <a href="/cadastrar" class="btn2">Criar<br></br>conta</a>
                        <a href="" class="btn">Entrar</a>
                    </div>
                </div>
            </div>

        </header>

     <Outlet />
   </>
 )
};

// Páginas
const Home = () => {
 return(
   <>
   <h1>Home</h1>
   <p>IFSP</p>
   </>
 )
};
const Listar = () => {
  return (
    <>
    <h1>Listar usuários</h1>
 <ListarUsuarios></ListarUsuarios>
    </>  
 )
 };
const Cadastrar = () => { 
  return (
    <>
    <h1>Cadastrar</h1>
 <CadastrarUsuario></CadastrarUsuario>
    </>  
 )
 };
const Doar = () => { 
  return (
    <>
    <h1>Dados para doação</h1>
    <FazerDoacao></FazerDoacao>
    </>  
 )
 };


//Função De listagem dos usuários 
function ListarUsuarios(){
 const [usuario, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const resposta = await axios.get('http://localhost:3333/usuario');
     setData(resposta.data);
   };
   fetchData();
 }, []);

 return (
   <table style={{ borderCollapse: 'collapse', width: '100%' }}>
       <thead>
         <tr style={{ borderBottom: '1px solid #ddd' }}>
           <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>CPF</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Telefone</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Cep</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Cidade</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Estado</th>
         </tr>
       </thead>
       <tbody>
         {usuario.map((usuario, index) => (
           <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
             <td style={{ padding: '8px' }}>{usuario.nome}</td>
             <td style={{ padding: '8px' }}>{usuario.email}</td>
             <td style={{ padding: '8px' }}>{usuario.cpf}</td>
             <td style={{ padding: '8px' }}>{usuario.telefone}</td>
             <td style={{ padding: '8px' }}>{usuario.cep}</td>
             <td style={{ padding: '8px' }}>{usuario.cidade}</td>
             <td style={{ padding: '8px' }}>{usuario.estado}</td>
           </tr>
         ))}
       </tbody>
     </table>
 );
}

//Função de Cadastrar usuários
const CadastrarUsuario = () => {
 const [nome, setNome] = useState('');
 const [email, setEmail] = useState('');
 const [cpf, setCpf] = useState('');
 const [telefone, setTelefone] = useState('');
 const [senha, setSenha] = useState('');
 const [cep, setCep] = useState('');
 const [cidade, setCidade] = useState('');
 const [estado, setEstado] = useState('');
 

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     // Envia os dados para a rota usando o método POST
     await axios.post('http://localhost:3333/usuario', { nome, email, cpf, telefone, senha, cep, cidade, estado });
     alert('Dados enviados com sucesso!');
     // Limpa os campos após o envio bem-sucedido
     setNome('');
     setEmail('');
     setCpf('');
     setTelefone('');
     setSenha('');
     setCep('');
     setCidade('');
     setEstado('');

   } catch (error) {
     console.error('Erro ao enviar dados:', error);
     alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
   }
 };

 return (
   <div>
     <h2>Formulário de Usuário</h2>
     <form onSubmit={handleSubmit}>
       <label>
         Nome:
         <input
           type="text"
           value={nome}
           onChange={(e) => setNome(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Email:
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         CPF:
         <input
           type="number"
           value={cpf}
           onChange={(e) => setCpf(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Telefone:
         <input
           type="tel"
           value={telefone}
           onChange={(e) => setTelefone(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Cep:
         <input
           type="number"
           value={cep}
           onChange={(e) => setCep(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Cidade:
         <input
           type="text"
           value={cidade}
           onChange={(e) => setCidade(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Estado:
         <input
           type="text"
           value={estado}
           onChange={(e) => setEstado(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Senha:
         <input
           type="password"
           value={senha}
           onChange={(e) => setSenha(e.target.value)}
           required
         />
       </label>
       <br />
       <br />
       <button type="submit">Enviar</button>
     </form>
   </div>
 );
};

//Função de cadastrar doação

const FazerDoacao = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [valor, setValor] = useState('');
  const [modelo, setModelo] = useState('');
  const [mensagem, setMensagem] = useState('');
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      // Envia os dados para a rota usando o método POST
      await axios.post('http://localhost:3333/doacao', { nome, cpf, valor, modelo, mensagem });
      alert('Dados enviados com sucesso!');
      // Limpa os campos após o envio bem-sucedido
      setNome('');
      setCpf('');
      setValor('');
      setModelo('');
      setMensagem('');
 
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
    }
  };
 
  return (
    <div>
      <h2>Vamos fazer uma doação! 😁😁😁</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="number"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Valor:
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Modelo:
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mensagem:
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
 };

// Final 

export default App;
