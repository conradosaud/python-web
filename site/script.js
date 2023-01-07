/*
    Todos os códigos JavaScript deste projeto está escrito em EcmaScript 6
*/

const carregaTabela = ( dados ) => {

    let html = "";

    dados.map( item => {
        html += "<tr>";
            html += "<td>" + item.id + "</td>";
            html += "<td>" + item.nome + "</td>";
            html += "<td>" + item.email + "</td>";
            //html += "<td>" + item.registro + "</td>"
        html += "</tr>"
    })

    

    document.querySelector("tbody").innerHTML = html;

}

const buscaTodos = () => {
    request("GET", "/usuarios/busca_todos")
    .then( resposta => {
        const dados = JSON.parse(resposta.data)
        carregaTabela( dados ) 
    })
    .catch( resposta => console.log( resposta ) );
}

const salvar = (e) => {

    e.preventDefault();

    const nome = document.getElementsByName("nome")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const senha = document.getElementsByName("senha")[0].value;

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    request("POST", "/usuarios/insere", usuario)
    .then( resposta => { 
        alert("Usuário inserido com sucesso!") 
        buscaTodos(); // já chama o busca todos para atualizar a tabela ao lado
    })
    .catch( resposta => console.log( resposta ) );

}

