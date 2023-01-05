# --- Funções básicas do CRUD: inserir, consultar, deletar e alterar

from bd import bd, cursor

def insere( usuario ):

    query = "INSERT INTO usuarios (nome, email, senha) VALUES ('%s', '%s', '%s')"
    valores =  (usuario.nome, usuario.email, usuario.senha)
    query = query%valores # melhorar isso aqui

    cursor.execute( query )
    bd.commit()

    print(cursor.rowcount, "record inserted")

def selecionaTodos():
    
    query = "SELECT * FROM usuarios"
    cursor.execute( query )
    resultados = cursor.fetchall()

    for item in resultados:
        print(item)

def seleciona( id ):
    
    query = "SELECT * FROM usuarios WHERE id = %s" % id
    cursor.execute( query )
    resultados = cursor.fetchall()

    for item in resultados:
        print(item)

