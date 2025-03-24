# back-end-tf-web
Back-End do trabalho final da disciplina de WEB

# Integrantes
Adriano Miranda de Jesus

Hênio Richard Rodrigues Santos

Luis Fillipe Ferreira Machado

Rhuan Spósito de Almeida

# Endpoints
## [GET] /shows
Retorna todos os shows e suas informações.
## [POST] /show/codigo
Insere um show no BD.
```
{
    'pessoas':1000,
    'artista':'Travis Scott',
    'valor_disp': 6000,
    'valor_final': 3700,
    'endreco': 'Clube XXY',
    'codigo': 5,
    'responsavel': 'rsa8@aluno.ifnmg.edu.br'
}
```

## [PUT] /show/codigo
Atualiza os dados de um curso com base no seu código.
```
{
    'pessoas':500,
    'artista':'Marina sena',
    'valor_disp': 7000,
    'valor_final': 8000,
    'endreco': 'Lilia's',
    'responsavel': 'rsa8@aluno.ifnmg.edu.br'
}
```

## [DELETE] /show/codigo
Deleta um curso do BD.

## [PUT] /login
Autenticação dos administradores.

## [POST] /admin
Insere um novo admin no BD.
```
{
    'email': 'admin@gmail.com',
    'senha': 'senhaaa',
    'nome': 'Fulaninho'
}
```

## [DELETE] /admin
Deleta um administrador do sistema.
