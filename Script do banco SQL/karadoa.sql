create database karadoa;
use karadoa;

create table usuario(
id int primary key auto_increment,
cpf bigint not null,
nome varchar(45) not null,
email varchar(45),
telefone varchar(20),
senha varchar(30) not null,
cep varchar(9) not null,
cidade varchar(45) not null,
estado char(2) not null
);

create table doacao(
id int primary key auto_increment,
nome varchar(45) not null,
cpf bigint not null,
valor integer not null,
modelo varchar(45) not null,
mensagem text(300) not null
);



