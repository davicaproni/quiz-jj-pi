
create database quiz;

use quiz;

create table cadastro (
idCadastro int primary key auto_increment,
nome varchar(75),
senha varchar(45)
);

create table pontuacao (
idPontuacao int primary key auto_increment,
pontos int,
dtPonto datetime default current_timestamp,
fkCadastroP int,
constraint fkCadastroPonto
	foreign key (fkCadastroP)
		references cadastro(idCadastro)
);

create table feedback (
idFeedback int primary key auto_increment,
comentario varchar(250),
nota decimal,
dtComent datetime default current_timestamp,
fkCadastroF int,
constraint fkCadastroFeedback
	foreign key (fkCadastroF)
		references cadastro(idCadastro)
);