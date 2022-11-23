create database agoravita;

use agoravita;

create table usuario (
	id int primary key auto_increment,
    nome varchar(50),
    email varchar(50),
    senha varchar(50)
);

create table publicacao (
	idPub int auto_increment,
    titulo varchar(100),
    texto varchar(150),
    fkUsuario int,
    foreign key (fkUsuario) references usuario(id),
    primary key (idPub, fkUsuario)
);

create table sorteioFrases (
	id int auto_increment,
    fkUsuario int,
    dtSorteio datetime,
    foreign key (fkUsuario) references usuario(id),
    primary key (id, fkUsuario)
);