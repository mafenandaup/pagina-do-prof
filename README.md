# Página do Professor

Esse projeto é uma repaginação do projeto "Aulas", feito pelo professor Marcos Dessa. Ele permite a visualização de aulas, alunos e a associação de cada aluno com uma aula. Feita para o estudo de React router, MPA's, rotas em Node.JS e Banco de Dados Relacional (MongoDB)

## Features

- Interface intuitiva e responsiva, utiliza ícones para a associação visual de funções.
- Gerenciamentos de aulas e alunos no Backend com métodos CRUD
- Integração a modelos de banco de dados relacionais (MongoDB).
- Arquitetura de rotas baseada em React Router, garantindo fácil navegação e separação de responsabilidades.


## Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Git** (para clonar o repositório)
- **Vite** (ferramenta de build para o frontend)

## Dependências

Back-end (server-app)

- **Express (framework para construção de APIs)**
- **MongoDB (gerenciamento de banco de dados)**
- **Axios (integração com APIs externas)**
- **Prisma Client (Criação de Schemas e integração com BD)**
- **CORS (Permite que o Front-end acesse recursos do back)**

Front-end (client-app)

- **Framer Motion (Biblioteca de animações flúidas)**
- **FontAwesome (Biblioteca para ícones customizáveis)**
- **Axios (possibilita a execução de requisições HTTP)**

## Contribuições 

Este projeto aceita contribuições diversas, como pull requests, conserto de bugs e feature requests. Caso deseja contribuir, é recomendável que leia as instruções de instalação abaixo:

### Instalação

Siga os passos abaixo para instalar e configurar o projeto:

 1. Clone o repositório
```bash
git clone https://github.com/mafenandaup/pagina-do-prof.git
cd pagina-do-prof
```

 2. Instale as dependências no back end:
```bash
cd server-app
npm install
```

 3. Instale as dependências no front end (caso desejar, abra um novo terminal para a instalação):
```bash
cd client-app
cd client-main
npm install
```
4. Inicialize o backend (certifique-se de estar na pasta server-app)
```bash
npm start
```
ou 
```bash
node --watch index.js
```
5. Inicialize o front-end  (certifique-se de estar na pasta client-main)

```bash
npm run dev
```
---

## Contato
Para tratar questões relacionadas a tratamento de erros ou em relação ao uso deste software, entre em contato via mariafernandapmaia@gmail.com .