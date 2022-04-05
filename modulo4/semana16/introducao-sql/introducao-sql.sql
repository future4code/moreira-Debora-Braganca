#Exercício 01

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#a)
#PRIMARY KEY - chave primária,
#NOT NULL - não pode ser nulo,
#DATE - deve seguir o formato de data yyyy-mm-dd,
#VARCHAR(255) - texto de no máximo 255 caracteres.

#b)
SHOW DATABASES;
# Mostra as bases de dados disponíveis.
SHOW TABLES;
# Mostra as tabelas dentro de uma base de dados.

#c)
DESCRIBE Actor;
# Mostra os nomes e tipos das colunas.

#Exercício 02
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

#b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Tony",
  600000,
  "1955-08-25", 
  "male"
);
#Erro pois a chave primária está duplicada isso não pode acontecer, a chave primária deve ser única.

#c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#Erro pois há mais valores do que os descritos no INTO (id, name, salary)

#d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
#Erro pois o campo de nome está vazio

#e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
#Erro pois a data não está entre aspas, formato errado.alter

#f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
),
(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
),
(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

