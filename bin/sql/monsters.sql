


CREATE TABLE monsters(
  id serial,
  name character varying(50) NOT NULL,
  personality character varying(50) NOT NULL
);

CREATE TABLE habitats(
  id serial,
  name character varying(50) NOT NULL,
  climate character varying(50) NOT NULL,
  temperature int
);

CREATE TABLE lives(
  monster character varying(50) NOT NULL,
  habitat character varying(50) NOT NULL
);

INSERT INTO monsters(name, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');


INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forrest', 'huanted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');
