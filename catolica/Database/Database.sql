create database if not exists usuarios default character set utf8 default collate utf8_general_ci;
use usuarios;
create table if not exists usuarios (
	id int not null auto_increment,
	nome varchar(50) not null,
	sexo enum("F","M"),
	email varchar(120),
    nascimento date,
	primary key(id)
) default charset = utf8;

insert into usuarios values
	(default, "Lucas", "M", "lucasdesousadantas@gmail.com","2002-01-07"),
    (default, "Admin", "M", "lucasdantasprogramador@gmail.com","2002-01-07");
    

create user "lucas"@"localhost" identified by "lucas";
grant all privileges on *.* to "lucas"@"localhost";
flush privileges;
show grants for "lucas"@"localhost";
show databases;