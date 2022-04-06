SET SQL_SAFE_UPDATES = 0;

#Exercício 01
#a)O comando irá apagar a coluna de salário
#b)Altera o nome da coluna de gender para sex e declara o tipo string com até 6 caracteres
#c)Redeclara os possíveis valores para a coluna
#d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#Exercício 02
#a)UPDATE Actor
#SET name = "",
#SET birth_date = ""
#WHERE id = "003"

#b)UPDATE Actor
#SET name = "JULIANA PAES"
#WHERE name = "Juliana Paes";
#UPDATE Actor
#SET name = "JULIANA PAES"
#WHERE name = "Juliana Paes";

#c)UPDATE Actor
#SET name = "",
#birth_date = "",
#salary = 500000,
#gender = ""
#WHERE id = "005";

#Exercício 03
#a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

#b)DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

#Exercício 04
#a)SELECT MAX(salary) FROM Actor;

#b)SELECT MIN(salary) FROM Actor WHERE gender = "female";

#c)SELECT COUNT(*) FROM Actor WHERE gender = "female";

#d)SELECT SUM(salary) FROM Actor;

#Exercício 05
#a)

#b)SELECT id, name FROM Actor ORDER BY name DESC;

#c)SELECT * FROM Actor ORDER BY salary;

#d)SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

#d)SELECT AVG(salary), gender FROM Actor GROUP BY gender;

#Exercício 06
