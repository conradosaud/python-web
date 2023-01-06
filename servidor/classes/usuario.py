class Usuario:

    # Método de inicialização. As variáveis são criadas aqui
    def __init__(self, nome, email, senha):
        self.nome = nome
        self.email = email
        self.senha = senha

    # Isso é o que vai ser mostrado quando alguém der print() nessa classe
    def __str__(self):
        return self.nome + ", " + self.email