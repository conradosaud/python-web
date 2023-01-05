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

####