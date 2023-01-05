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

    // ... enviar para o servidor

}