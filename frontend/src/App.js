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
     <nav>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/listar">Listar</Link>
         </li>
         <li>
           <Link to="/cadastrar">Cadastrar</Link>
         </li>
         <li>
           <Link to="/doacao">Fazer Doação</Link>
         </li>
       </ul>
     </nav>
     <hr></hr>

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

//Função de fazer doação


export default App;
