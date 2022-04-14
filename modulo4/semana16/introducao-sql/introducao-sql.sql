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

#Exercício 03
#a)
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";
#b)
SELECT salary from Actor WHERE name = "Tony Ramos";
#c)
SELECT * FROM Actor WHERE gender = "invalid";
#d)
SELECT id, name, salary from Actor WHERE salary <= 500000;
#e)A coluna nome não existe, o correto é name.
SELECT id, name from Actor WHERE id = "002";

#Exercício 04
SELECT * from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#a)
#b)
SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
#c)
SELECT * from Actor WHERE name LIKE "%G%" OR name = "%g%";
#d)
SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;

#Exercício 05
#a)
CREATE TABLE filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao NUMERIC CHECK (avaliacao >= 0 AND avaliacao <= 10)
);
#b, c, d)
INSERT INTO filmes VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7),
("002",
"Dode de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10),
("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8);
#e)
INSERT INTO filmes VALUES(
"004",
"O Auto da Compadecida",
"As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora.",
"2000/09/10",
10);

#Exercício 06
#a)
SELECT id, nome, avaliacao from filmes WHERE id = "003";
#b)
SELECT * from filmes WHERE nome = "O Auto da Compadecida";
#c)
SELECT id, nome, sinopse from filmes WHERE AVALIACAO >= 7;

#Exercício 07
