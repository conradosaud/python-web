# python-web
 Aplicação web para Python com interação de formulários e conexão com banco MySQL

## Dependências
É necessário a instalação do [pip](https://www.geeksforgeeks.org/how-to-install-pip-on-windows/) para gerenciamento de pacotes.
Também é preciso a instalação do **pipenv** para o ambiente de desenvolvimento.
``pip install pipenv``
Após a instalação do __pipenv__, inicie o ambiente de desenvolvimento virtual (__virtual environment__):
``pipenv shell``
Em seguida, instale todos os pacotes de dependência do projeto:
``pipenv install``  
O projeto já está pronto para ser iniciado.

> [Como usar o pipenv](https://realpython.com/pipenv-guide/)

### README editores
[pandao](https://pandao.github.io/editor.md/en.html) Exemplos da sintaxe
[dillinger](https://dillinger.io/) - Editor de arquivos
[markdownguide](https://www.markdownguide.org/basic-syntax/) - Sintaxe básica

## Site
O diretório [site](site) contém arquivos HTML, CSS e JavaScript que simulam uma tela de gerência de usuários, onde é possível cadastrar e consultar os usuários cadastrados no sistema.

Usando apenas JavaScript puro, a requisição para o servidor Python é feito usando __XMLHttpRequest__.

> [Como usar o XMLHttpRequest](https://www.w3schools.com/js/js_ajax_http_send.asp)

## Servidor

### Arquivos

#### \_init\_.py
Usado para indicar a pasta raiz da aplicação, tornando mais fácil importar os módulos. Este arquivo não precisa conter nada escrito dentro dele para funcionar, basta existir na pasta raiz.

> Instruções de uso: [Stackoverflow](https://stackoverflow.com/questions/448271/what-is-init-py-for) e [Python docs](https://docs.python.org/3/reference/import.html#regular-packages).  

Neste caso, o *__init.py__* está dentro da pasta __servidor__, pois será o local onde estão todos os arquivos em Python a serem usados na aplicação. A pasta __site__ apenas envia requisições para o servidor em Python, sendo assim, o site nunca será usado pelo servidor, e sim, o contrário.

### Módulos

### API - Flask
A API que recebe requisições através das rotas definidas por ela, é feita utilizando o **Flask**. Para que o servidor (ou seja, a API) possa ser iniciado, é preciso iniciar o Flask com o comando:
``flask --app api run``

> [Documentação do Flask](https://flask.palletsprojects.com/en/2.2.x/quickstart/)

Note que **api** deve ser o nome do arquivo, então é necessário executar esse comando no diretório do servidor para que funcione, ou então escrever ``servidor/api`` para que o arquivo possa ser localizado diretamente da pasta raiz.
É recomendável usar o comando de **debug** para o modo de desenvolvimento, a fim de facilitar de possíveis problemas.
``flask --app api --debug run``

#### Rotas API
- __usuarios/busca_todos__: retorna todos usuários cadastrados
- __usuarios/busca_nome/<nome>__: retorna usuários que contém aquela string de nome em qualquer lugar
- __usuarios/busca/<id>__: retorna o usuário que possui aquele ID