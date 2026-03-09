require("dotenv").config();
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

let cadastros = [];
try {
  const dados = fs.readFileSync("cadastros.json", "utf-8");
  cadastros = JSON.parse(dados);
} catch (erro) {
  cadastros = [];
}

let proximoId = 1;

app.use(express.json());

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function telefoneValido(telefone) {
  return /^[0-9]{10,11}$/.test(telefone);
}

function validarCadastro(req, res, next) {
  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || nome.length < 3) {
    return res.status(400).json({
      error: "O nome é obrigatório e deve ter, pelo menos, 3 caracteres.",
    });
  }

  if (!email || !emailValido(email)) {
    return res.status(400).json({
      error: "Email inválido!",
    });
  }

  if (!telefone || !telefoneValido(telefone)) {
    return res.status(400).json({ error: "Telefone inválido!" });
  }

  if (mensagem && mensagem.length > 500) {
    return res.status(400).json({
      error: "A mensagem deve ter, no máximo, 500 caracteres.",
    });
  }

  next();
}

app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Cadastros!");
});

app.get("/cadastros", (req, res) => {
  res.status(200).json(cadastros);
});

app.post("/cadastros", validarCadastro, (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const novoCadastro = {
    id: proximoId++,
    nome,
    email,
    telefone,
    mensagem: mensagem || null,
  };

  cadastros.push(novoCadastro);

  fs.writeFileSync("cadastros.json", JSON.stringify(cadastros, null, 2));

  res.status(201).json({
    message: "Cadastro criado com sucesso!",
    cadastro: novoCadastro,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
