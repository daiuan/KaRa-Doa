const express=require('express')
const app = express();
app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.listen(9000, () => console.log("OK"));

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
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/pessoa/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from TestePessoa.Pessoa where nome like ?', [nomex]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/pessoa', async (req,res)=>{
    const {nome, email} = req.body;
    const [query] = await connection.execute('insert into TestePessoa.Pessoa (nome,email) values(?,?)', [nome,email]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Erro na adição'});
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
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/doador/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from karadoa.doador where nome like ?', [nomex]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/doador', async (req,res)=>{
    const {nome, email, cpf, telefone, senha, cep, cidade, estado} = req.body;
    const [query] = await connection.execute('insert into karadoa.doador (nome,email,cpf,telefone,senha,cep,cidade,estado) values(?,?,?,?,?,?,?,?)', [nome,email,cpf,telefone,senha,cep,cidade,estado]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

app.put('/doador/:id', async (req, res) => {
    const { id } = req.params;
    const {nome, email} = req.body;
    const [query] = await connection.execute('UPDATE karadoa.doador SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Doador não encontrado.' });
    return res.status(200).json({ mensagem: 'Doador alterado com sucesso.' });
})

app.delete('/doador/:id', async (req,res)=>{
    const { id } = req.params;
    const [query] = await connection.execute('delete from karadoa.doador where id = ?', [id]);
    if (query.affectedRows === 0) return res.status(404).json({ mensagem: 'Não encontrado.' });
    return res.status(200).json({ mensagem: 'Doador excluído com sucesso.' });
})

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
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/doacao', async (req,res)=>{
    const {id_doador, id_campanha, valor, status, data, modelo, mensagem} = req.body;
    const [query] = await connection.execute('insert into karadoa.docao (id_doador,id_campanha,valor,status,data,modelo,mensagem) values(?,?,?,?,?,?,?)', [id_doador,id_campanha,valor,status,data,modelo,mensagem]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Erro na adição'});
    return res.status(200).json({ mensagem: 'Inserido com sucesso.' });
})

// MÉTODOS PARA A TABELA CAMPANHA

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
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.get('/usuario/buscar/:nome', async (req,res)=>{
    const {nome} = req.params;
    let nomex = '%'+nome+'%'
    const [query] = await connection.execute('select * from karadoa.usuario where nome like ?', [nomex]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Nao encontrado. '});
    return res.status(200).json(query);
})

app.post('/usuario', async (req,res)=>{
    const {nome, email, cpf, telefone, senha, cep, cidade, estado} = req.body;
    const [query] = await connection.execute('insert into karadoa.usuario (nome,email,cpf,telefone,senha,cep,cidade,estado) values(?,?,?,?,?,?,?,?)', [nome,email,cpf,telefone,senha,cep,cidade,estado]);
    if(query.lenght === 0) return res.status(400).json({mensagem: 'Erro na adição'});
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