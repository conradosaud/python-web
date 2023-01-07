# --- Funções básicas do CRUD: inserir, consultar, deletar e alterar

from bd import bd, cursor

import json

def insere( usuario ):

    query = "INSERT INTO usuarios (nome, email, senha) VALUES (%s, %s, %s)"
    valores =  (usuario.nome, usuario.email, usuario.senha)

    # também e possível enviar a query pronta para o banco, assim:
    # query = query % valores # melhorar isso aqui
    # porém e necessário acrescentar as aspas na query em '%s'

    cursor.execute( query, valores )
    bd.commit()

    return True if cursor.rowcount else False

def buscaTodos():
    
    query = "SELECT * FROM usuarios ORDER BY id DESC"
    cursor.execute( query )
    resultados = cursor.fetchall()

    return resultados

def busca( id ):
    
    query = "SELECT * FROM usuarios WHERE id = %s" % id
    cursor.execute( query )
    resultados = cursor.fetchall()

    return resultados[0]

def buscaNome( nome ):

    # % é um simbolo especial do Python. Deve-se usar o %% como scape
    query = "SELECT * FROM usuarios WHERE nome LIKE '%%%s%%' " % nome
    cursor.execute( query )
    resultados = cursor.fetchall()

    return resultados
