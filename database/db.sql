CREATE DATABASE schooldb;

CREATE TABLE teacher(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(30),
    gender VARCHAR(1),
    subjectTitle TEXT,
    experience INTEGER
);

INSERT INTO teacher (firstName, lastName, gender, subjectTitle, experience)
VALUES ('Myrtle', 'Penn', 'M', 'Planetary Physics', 10),
       ('Jareth ', 'Andersen', 'M', 'Magic Survival', 9),
       ('Simra ', 'Meyers', 'F', 'Raid Strategy', 5),
       ('Iona ', 'Mcculloch', 'F', 'Foreign Anthropology', 2),
       ('Martha ', 'Turnbull', 'F', 'Bioengineering', 20),
       ('Anand ', 'Fisher', 'M', 'Alien Forensic Science', 3),
       ('Maia ', 'Mccall', 'F', 'Extinct Language Literature', 15),
       ('Jayda ', 'Conrad', 'F', 'Foreign Political Sciences', 8),
       ('Ernest  ', 'Marquez', 'F', 'Military History', 1);