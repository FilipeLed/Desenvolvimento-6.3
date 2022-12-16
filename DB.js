const cliente = require('./dbClient')

//mostrar todos os livros
async function getAllLivros(){
    try{
    const resultado = await cliente.query("select * from Livro")
    return resultado.rows
    }
    catch(ex){
        console.log("Ocorreu erro:"+ex)
    }
}

//cadastrar novo livro
async function postLivro(Nome,Autor,ISBN){
    try{
    await cliente.query(`INSERT INTO 
    Livro(Nome,Autor,ISBN) 
    VALUES('${Nome}','${Autor}',${ISBN})`)

    }
    catch(ex){
        console.log("Ocorreu erro:"+ex)
    }
}

//filtrar por autor
async function getAutor(Autor){
    try{
    const resultado = await cliente.query(` SELECT * 
    FROM LIVRO
    WHERE AUTOR = '${Autor}'
    ORDER BY Nome;`)
    console.table(resultado.rows)
    return resultado.rows
    }
    catch(ex){
        console.log("Ocorreu erro:"+ex)
    }
}


//filtrar por ISBN
async function getIsbn(ISBN){
    try{
        const resultado = await cliente.query(`select * from Livro 
        where ISBN = ${ISBN};`)
        return resultado.rows
        }
        catch(ex){
            console.log("Ocorreu erro:"+ex)
        }
}


//excluir livro existente
async function delLivro(ISBN){
    try{
    await cliente.query(` DELETE FROM LIVRO
    WHERE ISBN = ${ISBN};`)

    }
    catch(ex){
        console.log("Ocorreu erro:"+ex)
    }
}

//atualizar/editar livro
async function putLivro(Nome,Autor,ISBN,volume){
    try{
    await cliente.query(`UPDATE LIVRO SET  
        Nome = '${Nome}', 
        Autor = '${Autor}',
        volume = '${volume}'
        WHERE ISBN = ${ISBN};`)
    }
    catch(ex){
        console.log("Ocorreu erro:"+ex)
    }
}

//excluir conexão
async function endLivro(){
    await cliente.end()
    console.log("Conexão finalizada")
}


module.exports = {
    getAllLivros,
    getAutor,
    getIsbn,
    postLivro,
    delLivro,
    putLivro,
    endLivro
}


