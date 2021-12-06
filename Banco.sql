CREATE SCHEMA `caritesdw`; 

CREATE TABLE `caritesdw`.`usuariopf` (
  `idpf` INT NOT NULL,
  `nome` VARCHAR(100),
  `cpf` VARCHAR(11),
  `data` DATETIME,
  `celular` VARCHAR(20),
  `email` VARCHAR(255),
  `senha` VARCHAR(50),
  PRIMARY KEY (`idpf`)
  );
  
CREATE TABLE `caritesdw`.`usuariopj` (
  `idpj` INT NOT NULL,
  `cnpj` VARCHAR(14),
  `nome` VARCHAR(100),
  `telefone` VARCHAR(20),
  `site` VARCHAR(50),
  `email` VARCHAR(50),
  `senha` VARCHAR(50),
  PRIMARY KEY (`idpj`)
  );
   
INSERT INTO `caritesdw`.`usuariopf` (idpf, nome, cpf, data, celular, email, senha)
VALUES (1, 'Feijuquinha', '15678952376', '2005-10-15', '11963414653', 'hmmm@gmail.com', '123456');  

INSERT INTO `caritesdw`.`usuariopf` (idpf, nome, cpf, data, celular, email, senha)
VALUES (2, 'Obama', '69678954572', '2000-12-23', '13963414653', 'obama.ual@gmail.com', '741852963'); 

INSERT INTO `caritesdw`.`usuariopf` (idpf, nome, cpf, data, celular, email, senha)
VALUES (3, 'Lindovaldo', '69678954572', '2000-12-23', '13963414653', 'lindo.valdo@gmail.com', '74153963'); 
  
INSERT INTO `caritesdw`.`usuariopj` (idpj, nome, telefone, site, email, senha)
VALUES (4, 'Beto Carreiro', '11963489753', 'https://www.4devs.com.br', 'beto.carreiro@gmail.com', '654321');

INSERT INTO `caritesdw`.`usuariopj` (idpj, cnpj, nome, telefone, site, email, senha)
VALUES (5, '12345678909876', 'Icaro', '11963489740', 'https://www.icaro.com.br', 'icaro.prof@gmail.com', '987456321');

INSERT INTO `caritesdw`.`usuariopj` (idpj, cnpj, nome, telefone, site, email, senha)
VALUES (6, '62345678909876', 'Fran', '11968389740', 'https://www.batata.com.br', 'batata@gmail.com', '981371');

INSERT INTO `caritesdw`.`usuariopj` (idpj, cnpj, nome, telefone, site, email, senha)
VALUES (7, '82345678909876', 'Eric Cire', '11968389740', 'https://www.eric.com.br', 'eric@gmail.com', '0076321');







