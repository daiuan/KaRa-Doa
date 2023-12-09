const express=require('express')
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(cors());

const PORT = 3333;

app.listen(PORT, () => 
{console.log("Tudo funcionando chefia 😎👍")}
);

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})

/*
app.get('/', (req,res)=>{
    res.send("Kauan Barbosa Machado");
})

const getAllPessoas = async () =>{
    const [query] = await connection
    .execute ('select * from TestePessoa.Pessoa');
    return query;
}

app.get('/pessoa', async (req,res)=>{
    const consulta = await getAllPessoas();
    return res.status(200).json(consulta);
})

app.get('/pessoa/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/pessoa/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where nome like ?', [nomex]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/pessoa', async (req,res)=>{
    const {nome, email} = req.body;
    const [query] = await connection.execute('insert into TestePessoa.Pessoa (nome,email) values(?,?)', [nome,email]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.put('/pessoa/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, email} = req.body;
    const [query] = await connection.execute('UPDATE TestePessoa.Pessoa SET nome = ?, email = ? WHERE id = ?', [id, nome, email]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
    return res.status(200).json({ mensagem: 'Pessoa alterada com sucesso.' });
})

app.delete('/pessoa/:id', async (req,res)=>{
    const { id } = req.params;
    const [query] = await connection.execute('delete from TestePessoa.Pessoa where id = ?', [id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json({ mensagem: 'Pessoa excluída com sucesso.' });
}) */


// MÉTODOS PARA A TABELA DOADOR 

app.get('/', (req,res)=>{
    res.send("Kauan Barbosa Machado");
})

/* 
const getAlldoador = async () =>{
    const [query] = await connection
    .execute ('select * from karadoa.doador');
    return query;
}

app.get('/doador', async (req,res)=>{
    const consulta = await getAlldoador();
    return res.status(200).json(consulta);
})

app.get('/doador/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from karadoa.doador where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/doador/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from karadoa.doador where nome like ?', [nomex]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/doador', async (req,res)=>{
    const {nome, email, cpf, telefone, senha, cep, cidade, estado} = req.body;
    const [query] = await connection.execute('insert into karadoa.doador (nome,email,cpf,telefone,senha,cep,cidade,estado) values(?,?,?,?,?,?,?,?)', [nome,email,cpf,telefone,senha,cep,cidade,estado]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.put('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, email, cpf, telefone, senha, cep, cidade, estado} = req.body;
    const [query] = await connection.execute('UPDATE karadoa.doador SET nome = ?, email = ?, cpf = ?, telefone = ?, senha = ?, cep = ?, cidade = ?, estado = ? WHERE id = ?', [nome, email, cpf, telefone, senha, cep, cidade, estado, id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Doador não encontrado.' });
    return res.status(200).json({ mensagem: 'Doador alterado com sucesso.' });
})

app.delete('/doador/:id', async (req,res)=>{
    const { id } = req.params;
    const [query] = await connection.execute('delete from karadoa.doador where id = ?', [id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json({ mensagem: 'Doador excluído com sucesso.' });
})
*/

// MÉTODOS PARA A TABELA DOAÇÃO

const getAlldoacao = async () =>{
    const [query] = await connection
    .execute ('select * from karadoa.doacao');
    return query;
}

app.get('/doacao', async (req,res)=>{
    const consulta = await getAlldoacao();
    return res.status(200).json(consulta);
})

app.get('/doacao/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from karadoa.doacao where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/doacao', async (req,res)=>{
    const {nome, cpf, valor, modelo, mensagem} = req.body;
    const [query] = await connection.execute('insert into karadoa.doacao (nome, cpf, valor, modelo, mensagem) values(?,?,?,?,?)', [nome, cpf, valor, modelo, mensagem]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.put('/doacao/:id', async (req, res) => {
    const { id } = req.params;
    const {status} = req.body;
    const [query] = await connection.execute('UPDATE karadoa.doacao SET status = ? WHERE id = ?', [status, id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Doação não encontrado.' });
    return res.status(200).json({ mensagem: 'Doação alterada com sucesso.' });
})

app.get('/doacao/arrecadado', async (req,res)=>{
    const [query] = await connection.execute ('select sum(valor) from karadoa.doacao');
    return res.status(200).json(query);
}
)



// MÉTODOS PARA A TABELA CAMPANHA

const getAllcampanha = async () =>{
    const [query] = await connection
    .execute ('select * from karadoa.campanha');
    return query;
}

app.get('/campanha', async (req,res)=>{
    const consulta = await getAllcampanha();
    return res.status(200).json(consulta);
})

app.get('/campanha/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from karadoa.campanha where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrada. '});
    return res.status(200).json(query);
})

app.get('/campanha/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from karadoa.campanha where nome like ?', [nomex]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrada. '});
    return res.status(200).json(query);
})

app.post('/campanha', async (req,res)=>{
    const {nome, descricao, meta, categoria, pix, status} = req.body;
    const [query] = await connection.execute('insert into karadoa.campanha (nome,descricao,meta,categoria,pix,status) values(?,?,?,?,?,?)', [nome,descricao,meta,categoria,pix,status]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.put('/campanha/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, descricao, meta, categoria, pix, status} = req.body;
    const [query] = await connection.execute('UPDATE karadoa.campanha SET nome = ?, descricao = ?, meta = ?, categoria = ?, pix = ?, status = ? WHERE id = ?', [nome,descricao,meta,categoria,pix,status,id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
    return res.status(200).json({ mensagem: 'Campanha alterada com sucesso.' });
})

app.delete('/campanha/:id', async (req,res)=>{
    const { id } = req.params;
    const [query] = await connection.execute('delete from karadoa.campanha where id = ?', [id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrada.' });
    return res.status(200).json({ mensagem: 'Campanha excluída com sucesso.' });
})

// MÉTODOS PARA A TABELA USUÁRIO

const getAllusuario = async () =>{
    const [query] = await connection
    .execute ('select * from karadoa.usuario');
    return query;
}

app.get('/usuario', async (req,res)=>{
    const consulta = await getAllusuario();
    return res.status(200).json(consulta);
})

app.get('/usuario/:id', async (req,res)=>{
    const {id} = req.params;
    const [query] = await connection.execute('select * from karadoa.usuario where id = ?', [id]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/usuario/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from karadoa.usuario where nome like ?', [nomex]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/usuario', async (req,res)=>{
    const {nome, email, cpf, telefone, senha, cep, cidade, estado} = req.body;
    const [query] = await connection.execute('insert into karadoa.usuario (nome,email,cpf,telefone,senha,cep,cidade,estado) values(?,?,?,?,?,?,?,?)', [nome,email,cpf,telefone,senha,cep,cidade,estado]);
    if(query.length === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, email} = req.body;
    const [query] = await connection.execute('UPDATE karadoa.usuario SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    return res.status(200).json({ mensagem: 'Usuário alterado com sucesso.' });
})

app.delete('/usuario/:id', async (req,res)=>{
    const { id } = req.params;
    const [query] = await connection.execute('delete from karadoa.usuario where id = ?', [id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json({ mensagem: 'Usuário excluído com sucesso.' });
})