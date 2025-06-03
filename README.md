# Página do Professor

## Features

- Tradução instantânea de frases informais para linguagem corporativa.
- Interface simples e intuitiva, desenvolvida com React e estilizada com animações usando Framer Motion.
- Backend (Node.js) e integração com a API do Gemini AI para traduções de alta qualidade.


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
git clone https://github.com/seu-usuario/corporate-translator.git
cd corporate-translator
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