# 🚀 Real World App (RWA) | Cypress E2E Automation

## 📌 Sobre o Projeto

Este projeto apresenta uma suíte de testes automatizados desenvolvida utilizando Cypress sobre o Real World App (RWA), uma aplicação criada pela equipe do Cypress para demonstrar cenários reais de testes End-to-End.

O desenvolvimento foi realizado como parte dos estudos do curso Guardião da Qualidade, aplicando conceitos de Quality Assurance, criação de casos de teste e automação de testes funcionais.

O objetivo é aplicar conceitos de **Quality Assurance (QA)** através da elaboração de casos de teste e da automação de testes End-to-End (E2E) com Cypress, simulando um ambiente próximo ao encontrado em projetos reais.

A evolução deste projeto acompanha minha jornada de aprendizado, documentando tanto os requisitos propostos quanto as implementações realizadas.

---

# 📚 Contexto do Exercício

O **Real World App (RWA)** é uma aplicação desenvolvida pela equipe do Cypress para demonstrar padrões, estratégias e boas práticas de testes automatizados em uma aplicação real.

A aplicação simula um sistema financeiro, permitindo funcionalidades como:

* Autenticação de usuários;
* Cadastro de novos usuários;
* Gerenciamento de contas bancárias;
* Transferências entre usuários;
* Histórico de transações.

Neste exercício, o foco é praticar a criação de casos de teste e sua automação utilizando Cypress.

**Repositório oficial do projeto**

https://github.com/cypress-io/cypress-realworld-app

---

# 🎯 Objetivo

Desenvolver uma suíte de testes automatizados para validar funcionalidades do Real World App utilizando Cypress.

Durante o projeto são aplicados conceitos como:

* Escrita de Casos de Teste;
* Testes Funcionais;
* Testes End-to-End (E2E);
* Cenários positivos e negativos;
* Organização da suíte de testes;
* Boas práticas de automação;
* Evolução contínua da arquitetura do projeto.

---

# 📋 Requisitos do Exercício

## Criação dos Casos de Teste

### Login

* [x] Login com sucesso
* [x] Login com credenciais inválidas

### Registro de Usuário

* [ ] Registro de novo usuário
* [ ] Registro com informações incompletas

---

## Automação dos Casos de Teste

### Login

* [x] Login com sucesso
* [x] Login com credenciais inválidas

### Registro

* [ ] Registro com sucesso
* [ ] Registro inválido

---

# 🛠️ Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Git
* GitHub
* Visual Studio Code

---

# 📁 Estrutura do Projeto

```text
cypress/
│
├── downloads/
├── fixtures/
├── screenshots/
├── support/
├── tests/
│   └── ui/
│       └── login.spec.js
└── videos/

cypress.config.ts
package.json
README.md
```

*A estrutura será atualizada conforme novas features forem implementadas.*

---

# ▶️ Como Executar

Clone o projeto

```bash
git clone https://github.com/raphaelcoelho-hub/cypress-realworld-app.git
```

Entre na pasta

```bash
cd cypress-realworld-app
```

Instale as dependências

```bash
npm install
```

Inicie o projeto seguindo as instruções do repositório oficial do Cypress Real World App.

Execute os testes

Modo interativo

```bash
npx cypress open
```

Modo headless

```bash
npx cypress run
```

---

# 🧪 Casos de Teste

## 🔐 Feature: Login

---

### ✅ CT01 — Login com sucesso

**Status:** Concluído

### Requisito

Verificar se um usuário válido consegue acessar a aplicação utilizando credenciais válidas.

### Objetivo

Validar o fluxo de autenticação de um usuário previamente cadastrado.

### Pré-condições

* Aplicação em execução;
* Backend iniciado;
* Usuário cadastrado;
* Página `/signin` acessível.

### Passos

1. Acessar a tela de Login;
2. Informar usuário válido;
3. Informar senha válida;
4. Clicar em Login.

### Resultado Esperado

* Usuário autenticado com sucesso;
* Redirecionamento para a página inicial.

### Arquivo

`cypress/tests/ui/login.spec.js`

---

### ✅ CT02 — Login com credenciais inválidas

**Status:** Concluído

### Requisito

Garantir que usuários não consigam acessar o sistema utilizando credenciais inválidas.

### Objetivo

Validar a exibição da mensagem de erro durante tentativas de autenticação inválidas.

### Cenários Cobertos

* Usuário incorreto;
* Senha incorreta;
* Usuário e senha incorretos.

### Passos

1. Acessar Login;
2. Informar credenciais inválidas;
3. Clicar em Login.

### Resultado Esperado

* Login não realizado;
* Permanecer na tela de autenticação;
* Exibir a mensagem:

> `Username or password is invalid`

### Arquivo

`cypress/tests/ui/login.spec.js`

---

## 👤 Feature: Registro de Usuário

### ⏳ CT03 — Registro com sucesso

**Status:** Pendente

**Descrição**

Verificar se um novo usuário consegue realizar seu cadastro utilizando informações válidas.

---

### ⏳ CT04 — Registro com informações incompletas

**Status:** Pendente

**Descrição**

Garantir que o sistema exiba mensagens de validação ao tentar registrar um usuário sem preencher todos os campos obrigatórios.

---

# 🤖 Automação

## Arquivos Implementados

| Arquivo                   | Feature |
| ------------------------- | ------- |
| login.spec.js | Login   |

---

## Recursos Utilizados

* Testes End-to-End (E2E)
* Assertions do Cypress
* Seletores CSS
* Validação de mensagens de erro

---

# 📊 Status do Projeto

| Feature  | Caso de Teste        | Documentado | Automatizado |
| -------- | -------------------- | ----------- | ------------ |
| Login    | Login com sucesso    | ✅           | ✅            |
| Login    | Login inválido       | ✅           | ✅            |
| Registro | Cadastro com sucesso | ✅           | ⏳            |
| Registro | Cadastro inválido    | ✅           | ⏳            |

---

# 📈 Roadmap

## Exercícios

* [x] Login com sucesso
* [x] Login inválido
* [ ] Registro de usuário
* [ ] Registro inválido

---

## Evolução Técnica

* [ ] Refatorar estrutura dos testes
* [ ] Criar Custom Commands
* [ ] Utilizar Fixtures
* [ ] Melhorar reutilização de código
* [ ] Configurar geração de relatórios
* [ ] Configurar GitHub Actions

---

# 📅 Histórico de Evolução

## v0.1

* Configuração inicial do projeto;
* Estrutura do Cypress;
* Organização do ambiente.

## v0.2

* Criação dos casos de teste de Login;
* Automação dos cenários de Login;
* Documentação do projeto.

## Próximas versões

* Registro de usuários;
* Transferências;
* Contas bancárias;
* Refatoração da arquitetura;
* Integração contínua (CI);
* Relatórios de execução.

---

# 📚 Aprendizados Aplicados

Durante o desenvolvimento deste projeto estão sendo praticados conhecimentos relacionados a:

* Qualidade de Software;
* Planejamento de Casos de Teste;
* Testes Funcionais;
* Testes End-to-End (E2E);
* Cypress;
* JavaScript;
* Organização de suítes de automação;
* Documentação técnica;
* Versionamento utilizando Git.

---

# 👨‍💻 Autor

**Raphael D' Assunção Coelho**

Quality Assurance Analyst

Testes Funcionais • Automação • ERP • Regras de Negócio
