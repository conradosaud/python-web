# --- Cria a conexão com o banco de dados MySQL

import mysql.connector

# Informe as credenciais de acesso ao banco de dados
bd = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "", # Vazio para banco sem senha
    database = "python_connector" # Importante informar o nome do banco
)

# Essa é a instância do banco. Deve ser usada para executar as queries.
cursor = bd.cursor(dictionary=True) # Adicionar dictionary para que sejam criados objetos no javascript
