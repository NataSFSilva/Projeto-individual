create database agoravita;

use agoravita;

create table usuario (
	idUsuario char(6) primary key,
    nome varchar(50),
    email varchar(50),
    senha varchar(50)
);

create table publicacao (
	idPublicacao int auto_increment,
    tema varchar(100),
    texto varchar(150),
    corujas int,
    fkUsuario char(6),
    foreign key (fkUsuario) references usuario(idUsuario),
    primary key (idPublicacao, fkUsuario)
);

create table comentario (
	fkPublicacao int auto_increment,
    fkUsuario char(6),
    comentario varchar(100)
);