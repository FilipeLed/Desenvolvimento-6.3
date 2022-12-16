CREATE TABLE Livro 
(
    ID_Livro INT GENERATED ALWAYS AS IDENTITY,
    Nome varchar(200),
    Autor varchar(100),
    ISBN bigint,
	volume INT,
	PRIMARY KEY (ID_Livro)
);


INSERT INTO Livro (Nome,Autor,ISBN) VALUES
('Cálculo com Geometria Analítica','Louis Leithold',8529402065),
('Fundamentos de Física - Volume 1 - Mecânica','Robert Resnick',8521630352),
('Engenharia de Controle Moderno','Katsuhiko Ogata',8576058103),
('Mecânica Vetorial para Engenheiros: Estática','Ferdinand Pierre Beer',8580550467),
('Fundamentos de Física - Volume 4 - Óptica e Física Moderna','David Halliday',9788521630388);
 
 
--  drop schema public cascade;
--  create schema public;