create database agoravita;

use agoravita;

create table usuario (
	id int primary key auto_increment,
    nome varchar(50),
    email varchar(50),
    senha varchar(50)
);

create table publicacao (
	id int auto_increment,
    titulo varchar(100),
    texto varchar(150),
    fkUsuario char(6),
    foreign key (fkUsuario) references usuario(id),
    primary key (idPublicacao, fkUsuario)
);

create table filosofos (
	id int auto_increment,
    frase varchar(100),
    fonte varchar(150),
    fkUsuario char(6),
    foreign key (fkUsuario) references usuario(id),
    primary key (idPublicacao, fkUsuario)
);

