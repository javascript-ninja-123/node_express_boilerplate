


CREATE TABLE member(
  id serial PRIMARY KEY,
  name character varying(50) NOT NULL,
  nickname character varying(50) NOT NULL,
  joined int NOT NULL,
  crew character varying(50),
  salary real
);


CREATE TABLE song(
  title character varying(50) NOT NULL,
  rapper character varying(50) NOT NULL,
  createdAt int NOT NULL
);

CREATE TABLE album(
  album character varying(50) NOT NULL,
  rapper character varying(50) NOT NULL,
  createdAt int NOT NULL
);
