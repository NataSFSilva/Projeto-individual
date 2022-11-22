create database agoravita;

use agoravita;

create table usuario (
	id char(6) primary key,
    nome varchar(50),
    email varchar(50),
    senha varchar(50)
);

create table publicacao (
	id int auto_increment,
    tema varchar(100),
    texto varchar(150),
    fkUsuario char(6),
    foreign key (fkUsuario) references usuario(id),
    primary key (idPublicacao, fkUsuario)
);