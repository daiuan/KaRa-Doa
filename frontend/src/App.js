
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

// Css das páginas está em index.css

//Importar Imagens da pasta img dentro de src

import AddImg from './img/add.png';
import BannerImg from './img/banner.jpg';
import CampanhaImg from './img/campanha.jpg';
import HomeImg from './img/home.png';
import LogoImg from './img/logo.svg';
import SearchImg from './img/search.png';
import SupportImg from './img/support.png';

// Rotas ou links
function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="listardoacao" element={<Listar_Doacao />} />
         <Route path="listarusuarios" element={<Listar_Usuarios />} />
         <Route path="cadastrar" element={<Cadastrar />} />
         <Route path="doacao" element={<Doar />} />
         <Route path="campanha" element={<Campanha />} />
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
                        <a href="listarusuarios">Usuários</a>
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


// Html da página principal/início
const Home = () => {
 return(
   <>
   <section class="banner">
            <div></div>
        </section>

        <section>
            <div class="container campanhas">
                <h1>Campanhas</h1>

                <div class="grid">
                    <div class="item">
                        <div class="card">
                            <div class="card-content">
                                <h1>Prédio escolar</h1>
                                <img src={CampanhaImg}></img>
                                <div class="horizontal">
                                    <progress max="100" value="50"> </progress>
                                    <a href="/campanha" class="btn">Ver campanha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="item">
                        <div class="card">
                            <div class="card-content">
                                <h1>Prédio escolar</h1>
                                <img src={CampanhaImg}></img>
                                <div class="horizontal">
                                    <progress max="100" value="50"> </progress>
                                    <a href="/campanha" class="btn">Ver campanha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <div class="card-content">
                                <h1>Prédio escolar</h1>
                                <img src={CampanhaImg}></img>
                                <div class="horizontal">
                                    <progress max="100" value="50"> </progress>
                                    <a href="/campanha" class="btn">Ver campanha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <div class="card-content">
                                <h1>Prédio escolar</h1>
                                <img src={CampanhaImg}></img>
                                <div class="horizontal">
                                    <progress max="100" value="50"> </progress>
                                    <a href="/campanha" class="btn">Ver campanha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <div class="card-content">
                                <h1>Prédio escolar</h1>
                                <img src={CampanhaImg}></img>
                                <div class="horizontal">
                                    <progress max="100" value="50"> </progress>
                                    <a href="/campanha" class="btn">Ver campanha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <div class="card-content">
                                <h1>Prédio escolar</h1>
                                <img src={CampanhaImg}></img>
                                <div class="horizontal">
                                    <progress max="100" value="50"> </progress>
                                    <a href="/campanha" class="btn">Ver campanha</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
        </section>

        <footer>
            <div class="container">
                <div class="links">
                    <a href="">Quem Somos</a>
                    <a href="">Dúvidas Frequentes</a>
                    <a href="">Suporte</a>
                </div>
                <hr></hr>
                &copy; 2023 KaRa - Todos os Direitos Reservados
            </div>
        </footer>
   </>
 )
};

// Html da página de cadastro de usuário
const Cadastrar = () => { 
  return (
    <>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="container-doacao">
      <div class="card ">
        <div class="card-doacao">
          <CadastrarUsuario></CadastrarUsuario>
        </div>
      </div>
      </div>
    </>  
 )
 };

// Html da página da campanha
const Campanha = () => { 
  return (
    <>
    <section class="banner">
            <div>
                <h1>Prédio Escolar</h1>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="horizontal arrecadado">
                    <div class="info">
                        <h1>Prédio escolar</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa consequatur quod, reiciendis pariatur magnam rem maiores, dicta, unde aliquid officiis minima ratione dolorum ipsam sed non nostrum velit mollitia praesentium. Nesciunt, omnis aliquam praesentium totam optio saepe beatae nulla veritatis, fuga excepturi ratione, porro sequi quidem doloremque? Numquam, quo!</p>
                        
                        <div>
                            <strong><p>Arrecadado:</p></strong>
                            <p> Não sabemos / R$ 1.800.000,00</p>
                            <progress max="100" value="50"> </progress>
                        </div>
                    </div>
                    

                    <div class="card" id="card-detail">
                        <div class="card-content">
                            <img src={CampanhaImg}></img>
                            <div class="horizontal">
                                <a href="/doacao" class="btn">Quero doar</a>
                            </div>
                            <div class="horizontal">
                                <a href="/listardoacao" class="card-doacao">Listar doações já feitas</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section>
            <div class="container campanhas">
                <h1>Sobre a Campanha</h1>

                <div class="horizontal">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/gY1DG6bgeMs?si=h-ELHsmsu7TVtvyO" title="Sociologia - TI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quod corporis ex molestias culpa. Et, nihil nam ea possimus error quam similique. Earum quis aliquam reprehenderit eos illum est odio delectus quo saepe doloremque vero minima, dolor vel voluptate alias quasi optio nobis eius et minus harum accusantium nihil ex molestias. Veritatis qui amet expedita delectus dicta accusantium, quo voluptate quaerat, maiores ullam sequi quos non voluptas esse cupiditate! Ratione accusantium libero obcaecati harum necessitatibus accusamus minima assumenda quo. Exercitationem ducimus similique est unde accusamus magni, placeat quis esse deserunt, facilis tenetur sed dolore dolorum, nobis assumenda? Debitis in vel numquam labore laudantium maxime doloremque, quae iusto magnam consectetur velit reprehenderit odio modi rem assumenda mollitia delectus fugiat porro nesciunt similique incidunt quas voluptas. Sequi a cumque soluta ut quos provident, earum reiciendis omnis velit porro asperiores delectus dolore commodi! Error iusto laboriosam dignissimos! Ad impedit assumenda suscipit repellat pariatur.
                    </p>
                </div>

            </div>
        </section>

        <footer>
            <div class="container">
                <div class="links">
                    <a href="">Quem Somos</a>
                    <a href="">Dúvidas Frequentes</a>
                    <a href="">Suporte</a>
                </div>
                <hr></hr>
                &copy; 2023 KaRa - Todos os Direitos Reservados
            </div>
        </footer>
    </>  
 )
 };

// Html da página de doação para a campanha 
const Doar = () => { 
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="container-doacao">
      <div class="card ">
        <div class="card-doacao">
          <FazerDoacao></FazerDoacao>
        </div>
      </div>
      </div>
    </>  
 )
 };

// Html da página listar doações
const Listar_Doacao = () => {
  return (
    <>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <h1>Listar Doações</h1>
 <ListarDoacao></ListarDoacao>
    </>  
 )
 };

// Html da página listar usuários
const Listar_Usuarios = () => {
  return (
    <>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <h1>Listar Usuários</h1>
 <ListarUsuarios></ListarUsuarios>
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
      <h2>Formulário de doação</h2>
      <br></br>
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
          Forma de Pagamento:
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

//Função de listar doações
function ListarDoacao(){
  const [doacao, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:3333/doacao');
      setData(resposta.data);
    };
    fetchData();
  }, []);
 
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>CPF</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Valor</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Forma de Pagamento</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {doacao.map((doacao, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{doacao.nome}</td>
              <td style={{ padding: '8px' }}>{doacao.cpf}</td>
              <td style={{ padding: '8px' }}>{doacao.valor}</td>
              <td style={{ padding: '8px' }}>{doacao.modelo}</td>
              <td style={{ padding: '8px' }}>{doacao.mensagem}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
 }

// Final 

export default App;
