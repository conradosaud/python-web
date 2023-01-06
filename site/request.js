/*
    Esse é um código de copia e cola para usar o XMLHTTPRequest de maneira simple e rápida, tudo através
    de uma única função chamada "request". É possível fazer isso sem essa função que eu criei, porém
    toda vez que precisar fazer um request seria necessário escrever todo esse código (ou boa parte dele).

    Sendo assim, recomendo que estude como o XMLHTTPRequest funciona, e estudar ele sem esse código aqui.
    Depois que tiver o pleno conhecimento de sua funcionalidade, pronto, você já pode usar esse hack
    sem nenhum julgamento.
*/

// URL do servidor que está a API
const URL_API = "http://localhost:5000"

// Função abstraída para requsições via HTTP usando o XMLHTTPRequest
const request = (metodo, rota, dados = null) => {

    rota = URL_API + rota;

    // Promise permite a comunicação assíncrona do programa
    return new Promise(function (resolve, reject) {

        // Cria o XMLHttpRequest reponsável por enviar requisições
        var xhr = new XMLHttpRequest();
        // O método define qual é o tipo de request (GET, POST, etc) e a rota que será enviado a requisição
        xhr.open(metodo, rota);
        // Adiciona cabeçalho à requisição para que ela seja mais fácil de ser entendida pelo servidor
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // Depois de tudo preparado acima, envia a requisição para o servidor
        xhr.send(dados);

        // Essa é a função que recebe a resposta do servidor. A resposta dela pode demorar para chegar,
        // por isso ela é assíncrona. Essa função, onload, é chamado assim que a resposta  chega.
        xhr.onload = function () {
            // Se o status está dentro do código 200~299, quer dizer que a deu tudo certo
            if (xhr.status >= 200 && xhr.status <= 299) {
                resolve({ // Então finaliza com o resolve, que termina tudo
                    data: xhr.response, // Passa os dados que vieram da resposta aqui
                    status: xhr.status, // Qual foi o número do status que veio da resposta
                });
            }else{
            // Se foi enviado algum dado errado, como uma rota escrita errada, vai cair aqui no reject.
            // Ele faz exatamente a mesma coisa que o resolve.
                reject({
                    data: xhr.response,
                    status: xhr.status
                });
          }
        };

        // Caso aconteça algum erro no envio da requisição para o servidor, cai aqui.
        // Esse onerror é chamado invés do onload acima
        xhr.onerror = function () {
            // É bom mostrar no console que deu erro na requisição
            // Dessa forma fica fácil de diferenciar o erro da requisição e o erro da resposta
            console.log("Falha na requisição XHR");
            console.log(xhr.response)
            reject({ // E o reject é igual aos demais
                status: xhr.status,
                statusText: xhr.statusText
            });
            // Para ficar mais claro, também é possível usar um alert
            //alert("Falha na comunicação com o servidor.\nTente novamente mais tarde.");
        };

    });
}