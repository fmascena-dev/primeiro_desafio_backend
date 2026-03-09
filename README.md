# API de Cadastro de Profissionais Voluntários

Pequena API desenvolvida com **Node.js**, **Express**, **Nodemon**, **File System (fs)**, **Postman** para simular o cadastro de **médicos e dentistas voluntários** que desejam participar de ações sociais de saúde.

O projeto foi criado com o objetivo de praticar conceitos fundamentais de **desenvolvimento back-end**, como criação de rotas, uso de verbos HTTP, middleware, validação de dados e manipulação de arquivos JSON.

## Tecnologias utilizadas

* Node.js
* Express
* Dotenv
* File System (fs)
* Postman (para testes da API)

## Funcionalidades

A API possui duas rotas principais:

### Listar profissionais cadastrados

`GET /cadastros`

Retorna todos os profissionais cadastrados no sistema.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com",
    "telefone": "21999999999",
    "mensagem": "Quero ajudar em campanhas sociais"
  }
]
```

### Cadastrar um novo profissional

`POST /cadastros`

Permite cadastrar um novo profissional voluntário.

Exemplo de requisição:

```json
{
  "nome": "Maria Souza",
  "email": "maria@email.com",
  "telefone": "21988888888",
  "mensagem": "Tenho disponibilidade aos fins de semana"
}
```

Resposta esperada:

```json
{
  "message": "Cadastro criado com sucesso!",
  "cadastro": {
    "id": 1,
    "nome": "Maria Souza",
    "email": "maria@email.com",
    "telefone": "21988888888",
    "mensagem": "Tenho disponibilidade aos fins de semana"
  }
}
```

## Validações implementadas

Antes de salvar o cadastro, a API valida os dados enviados:

* **Nome**: obrigatório e com no mínimo 3 caracteres
* **Email**: deve possuir formato válido
* **Telefone**: deve conter 10 ou 11 números
* **Mensagem**: opcional, com no máximo 500 caracteres

Caso alguma validação falhe, a API retorna um erro com status **400**.

## Armazenamento dos dados

Os dados são armazenados em um arquivo local chamado:

```json
cadastros.json
```

Fluxo de funcionamento:

1. Quando a API inicia, ela lê o arquivo `cadastros.json`.
2. Os dados são carregados para um array em memória.
3. Ao cadastrar um novo profissional, o cadastro é:

   * adicionado ao array
   * salvo novamente no arquivo JSON.

Isso permite que os dados **permaneçam salvos mesmo após reiniciar o servidor**.

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Criar arquivo `.env`

```bash
PORT=3000
```

### 4. Iniciar o servidor

```bash
npm run dev
```

Servidor rodará em:

```bash
http://localhost:3000
```

## Testando a API

A API pode ser testada utilizando ferramentas como:

* Postman
Exemplo de endpoints:

```bash
GET http://localhost:3000/cadastros
POST http://localhost:3000/cadastros
```

## Objetivo educacional

Este projeto foi desenvolvido para praticar conceitos fundamentais de APIs REST, como:

* estrutura básica de uma API
* fluxo de requisição e resposta
* middleware no Express
* validação de dados
* manipulação de arquivos JSON
* testes de endpoints

## Possíveis melhorias futuras

Algumas melhorias que poderiam ser implementadas:

* separação de rotas, controllers e middlewares
* uso de banco de dados (MongoDB, PostgreSQL ou SQLite)
* criação de rotas para atualizar e remover cadastros
* validação utilizando bibliotecas como **Joi** ou **Zod**
* tratamento global de erros

## Autor

Projeto desenvolvido para fins de estudo em **Node.js, Express, Nodemon, Dotenv, File System (fs), Postman e desenvolvimento Back-End**.
