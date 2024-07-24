# TaskMinder

TaskMinder é um aplicativo moderno de gerenciamento de tarefas projetado para ajudar você a organizar e acompanhar suas atividades diárias. Com uma interface futurista e funcionalidades robustas, o TaskMinder torna a gestão de tarefas intuitiva e eficiente.

# Funcionalidades

Autenticação de Usuários: Registro e login seguros com validação e proteção JWT.

Gerenciamento de Tarefas: Adicione, edite e exclua tarefas facilmente.

Notificações: Receba notificações de tarefas pendentes.

Barra de Conclusão Animada: Visualize o progresso das suas tarefas de forma interativa.
Integração com ChatGPT: Obtenha ajuda e dicas diretamente dentro do aplicativo.
Design Responsivo: Interface amigável e adaptável para diferentes dispositivos.

# Tecnologias Utilizadas

Frontend: React, React Router

Backend: Node.js, Express

Banco de Dados: MongoDB

Autenticação: JWT (JSON Web Tokens)

# Como Executar o Projeto

Clone este repositório:

bash
git clone https://github.com/maateusbrito/taskminder.git
Instale as dependências:

bash
cd taskminder
npm install
Configure as variáveis de ambiente no arquivo .env:

env
MONGO_URI=sua_conexao_mongodb
JWT_SECRET=sua_chave_secreta_jwt
Inicie o servidor backend:

bash
npm run server
Inicie o frontend:

bash
npm start
Acesse o aplicativo em http://localhost:3000.
