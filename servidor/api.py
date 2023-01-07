from flask import Flask, request, Response, jsonify
from flask_cors import CORS

import json

import crud
from classes.usuario import Usuario

app = Flask(__name__)
CORS(app)

# Exemplo da documentação
@app.route("/")
def hello_world():
    return "hellow world"

@app.get("/usuarios/busca_todos")
def buscaTodos():
    return crud.buscaTodos()

# usa-se o <param> para receber os parâmetros da rota
@app.get("/usuarios/busca_nome/<nome>")
def buscaNome(nome):
    return crud.buscaNome(nome)

@app.get("/usuarios/busca/<id>")
def busca(id):
    return crud.busca(id)

# A operação de insere pode exigir mais linhas de comando
@app.post("/usuarios/insere")
def insere():    

    # Recebe o valor em JSON e o converte para dicionário
    dados = request.data
    dados = json.loads(dados)

    # Dois asteriscos = despejar todo os argumentos
    usuario = Usuario(**dados) 
    resposta = crud.insere(usuario)

    # No flask, o return precisa ser em string, response ou outros específicos
    return Response(status=201) if resposta else Response(status=400)

# Exemplos das demais operações
# @app.delete("/usuarios/remove/<id>") -- Deleta apenas usando o ID do usuário
# @app.put("/usuarios/altera/<id>") -- Precisa do ID e dos itens que serão alterados

