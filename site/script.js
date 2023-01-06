/*
    Todos os códigos JavaScript deste projeto está escrito em EcmaScript 6
*/

const salvar = (e) => {

    e.preventDefault();

    const nome = document.getElementsByName("nome")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const senha = document.getElementsByName("senha")[0].value;

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    // request("GET", "/usuarios/busca_todos")
    // .then( resposta => {
    //     console.log(resposta)
    //     alert("Usuário inserido com sucesso!")
    // })
    // .catch( resposta => console.log( resposta ) );

    request("POST", "/usuarios/insere", usuario)
    .then( resposta => {
        console.log(resposta)
        alert("Usuário inserido com sucesso!")
    })
    .catch( resposta => console.log( resposta ) );

}

