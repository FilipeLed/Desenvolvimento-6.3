const DB = require('./DB')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORTA = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

app.listen(PORTA,'localhost',()=>{
    console.log('Servidor de pé em http://localhost:8080');
    console.log('Para desligar o servidor: Crtl + c');
})

//Ver livros cadastrados
app.get('/livros', async (req, res) => {
    const mostrarLivros = await DB.getAllLivros()
	if (mostrarLivros) {
        res.status(200).send(mostrarLivros)
	} else {
		res.sendStatus(204)
    }
  })

//Ver Livro cadastrados
app.get('/livro/:isbn', async (req, res) => {
  const isbn = parseInt(req.params.isbn,10);
  const mostrarLivros = await DB. getIsbn(isbn)
if (mostrarLivros) {
      res.status(200).send(mostrarLivros)
} else {
  res.sendStatus(204)
  }
})

// Matricular aluno
app.post('/livros/cadastro', (req, res) =>{
    const livro = req.body;
    DB.postLivro(livro.Nome,livro.Autor,livro.ISBN)
    res.status(201).send(`Livro inserido com sucesso`);
})

app.put('/livros/atualizar', (req, res) => {
  const livro = req.body;
  DB.putLivro(livro.Nome,livro.Autor,livro.ISBN,livro.volume)
  res.status(200).send(`Livro atualizado com sucesso`);
})

app.delete('/livros/excluir/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  DB.delLivro(isbn)
  res.status(200).send('Livro excluido');
})

app.all('*', (req, res)=>{
  res.status(404).send("Página não encontrada");
});