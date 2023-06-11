const express = require("express");
const app = express();
const port = 3000;

const filmes = [
  {
    id: 1,
    nome: "Princesa Mononoke",
    cinema: "GNC Balneario",
    imagemCartaz:
      "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Princesa-Mononoke-DVD-capa-vers%C3%A1til.jpg?fit=1500%2C2124&ssl=1",
    startTime: "14:00",
    diretor: "Hayao Miyazaki",
    tipo: "Aventura",
    anoLancamento: 1997,
    classificacaoEtaria: "16+",
  },
  {
    id: 2,
    nome: "A viagem de Chihiro",
    cinema: "Cinemark",
    imagemCartaz:
      "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg",
    startTime: "14:00",
    diretor: "Hayao Miyazaki",
    tipo: "Fantasia",
    anoLancamento: 2003,
    classificacaoEtaria: "14+",
  },
];

// Rotas da API
app.get("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find((filme) => filme.id === id);
  // Dados fictícios de filmes

  if (filme) {
    res.json(filme);
  } else {
    res.status(404).json({ mensagem: "Filme não encontrado" });
  }
});

app.get("/filmes", (req, res) => {
  res.json(filmes);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
