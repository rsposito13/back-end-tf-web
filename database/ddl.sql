
create table Admin (
  email text not null primary key,
  senha text not null,
  nome text not null
);

CREATE TABLE Shows (
  pessoas integer not null,
    artista text,
      endereco text not null,
        data_hora timestamp not null,
          codigo integer not null primary key,
            valor_disp integer not null,
              valor_final integer,
                responsavel text,
                  FOREIGN KEY (responsavel) REFERENCES Admin(email)
                  );