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

* [x] Registro de novo usuário
* [x] Registro com informações incompletas

### Enviar dinheiro

* [x] Enviar dinheiro com saldo suficiente
* [ ] Enviar dinheiro com saldo insuficiente

---

## Automação dos Casos de Teste

### Login

* [x] Login com sucesso
* [x] Login com credenciais inválidas

### Registro

* [x] Registro com sucesso
* [x] Registro inválido

### Enviar dinheiro

* [x] Enviar dinheiro com saldo suficiente
* [ ] Enviar dinheiro com saldo insuficiente

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


cypress/
│
├── fixtures/
├── support/
└── tests/
    ├── api/
    ├── demo/
    └── ui/
        ├── auth.spec.ts
        ├── bankaccounts.spec.ts
        ├── cadastro.spec.js
        ├── login.spec.js
        ├── new-transaction.spec.ts
        ├── notifications.spec.ts
        ├── transacao.spec.js
        ├── transaction-feeds.spec.ts
        ├── transaction-view.spec.ts
        └── user-settings.spec.ts

cypress.config.ts
package.json
README.md


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

### Pré-condições

* Aplicação em execução;
* Backend iniciado;
* Usuário cadastrado;
* Página `/signin` acessível.

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

### ✅ CT03 — Registro com sucesso

**Status:** Concluído

**Descrição**

Verificar se um novo usuário consegue realizar seu cadastro utilizando informações válidas.

---

### Objetivo

Validar que um novo usuário pode realizar seu cadastro com sucesso ao preencher corretamente todos os campos obrigatórios,
e que após a conclusão do cadastro, o sistema redireciona corretamente para a página de login. Como validação adicional,
verificar que o usuário recém-cadastrado consegue realizar autenticação com sucesso utilizando as credenciais criadas 
durante o teste.

### Pré-condições

- Aplicação em execução (`http://localhost:3000`);
- Backend iniciado;
- Página de cadastro (`/signup`) acessível;
- O nome de usuário utilizado no teste não deve estar previamente cadastrado.

### Passos

1. Acessar a tela de cadastro;
2. Informar nome;
3. Informar sobrenome;
4. Informar nome de usuário válido;
5. Informar senha válida;
6. Confirmar o cadastro.

### Resultado Esperado

- O cadastro deve ser realizado com sucesso;
- O novo usuário deve ser criado na aplicação;
- O sistema deve redirecionar o usuário para a página de login (`/signin`), permitindo que ele realize sua primeira autenticação com as credenciais cadastradas.
- O usuário recém-cadastrado deve conseguir realizar login com sucesso utilizando as credenciais informadas durante o cadastro

### Arquivo

`cypress/tests/ui/cadastro.spec.js`


### ✅ CT04 — Registro com informações incompletas

**Status:** Cocluído

**Descrição**

Garantir que o sistema exiba mensagens de erro e não permita acesso à página de login, ao tentar registrar um usuário sem preencher todos os campos obrigatórios.

---

### Objetivo

Validar que a aplicação impeça o cadastro de novos usuários quando um ou mais campos
obrigatórios não forem preenchidos, exibindo mensagens de validação correspondentes.

### Pré-condições

- A aplicação web e o servidor backend devem estar em execução (http://localhost:3000);
- A página de cadastro (/signup) deve estar acessível.

### Passos

1. Acessar a tela de cadastro;
2. Preencher apenas parte das informações obrigatórias
   ou deixarf todos os campos em branco;
3. Tentar concluir o cadastro clicando no botão de
   criação da conta;

---

### Resultado Esperado

- O cadastro não deve ser realizado;
- A aplicação deve exibir mensagens de alerta para os
  campos obrigatórios não preenchidos;
- O usuário deve permanecer na tela de cadastro até que
  todas as informações sejam informadas corretamente;

---

---

## 💸 Feature: Enviar Dinheiro

### ✅ CT05 — Enviar dinheiro com saldo suficiente

**Status:** Concluído

### Descrição

Verificar se um usuário consegue realizar uma transferência quando possui saldo suficiente em conta.

### Objetivo

Validar que o sistema conclui a transferência com sucesso quando o saldo disponível é maior ou igual ao valor informado.

### Pré-condições

- Aplicação em execução (`http://localhost:3000`);
- Backend iniciado;
- Usuário autenticado;
- Conta com saldo suficiente.

### Passos

1. Acessar a funcionalidade **Enviar Dinheiro**;
2. Selecionar um destinatário;
3. Informar um valor dentro do saldo disponível;
4. Confirmar a transferência.

### Resultado Esperado

- A transferência deve ser realizada com sucesso;
- O saldo deve ser atualizado;
- A transação deve constar no histórico.

### Arquivo

`cypress/tests/ui/transferencia.spec.js`

---

### ⏳ CT06 — Enviar dinheiro com saldo insuficiente

**Status:** Automatizado (Aguardando validação da aplicação)

### Descrição

Garantir que o sistema exiba uma mensagem de erro ao tentar enviar dinheiro sem saldo suficiente.

### Objetivo

Validar que a aplicação impeça transferências cujo valor seja superior ao saldo disponível.

### Pré-condições

- Aplicação em execução (`http://localhost:3000`);
- Backend iniciado;
- Usuário autenticado;
- Conta com saldo insuficiente.

### Passos

1. Acessar a funcionalidade **Enviar Dinheiro**;
2. Selecionar um destinatário;
3. Informar um valor superior ao saldo disponível;
4. Confirmar a transferência.

### Resultado Esperado

- A transferência não deve ser concluída;
- O sistema deve exibir uma mensagem de saldo insuficiente.

### Observação

> Durante os testes realizados na versão local da Real World App, foi identificado que a aplicação permite concluir a transferência mesmo quando o saldo é insuficiente. A automação foi implementada conforme o requisito do exercício e encontra-se aguardando validação da comunidade da LumeStack sobre essa divergência entre o comportamento esperado e o observado.

### Arquivo

`cypress/tests/ui/transferencia.spec.js`


# 🤖 Automação

## Arquivos Implementados

| Arquivo                   | Feature |
| ------------------------- | ------- |
| login.spec.js             | Login   |
|cadastro.spec.js           |Registro de Usuário|
|transacao.spec.js          |Enviar dinheiro|

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
| Registro | Cadastro com sucesso | ✅           | ✅            |
| Registro | Cadastro inválido    | ✅           | ✅            |


| Feature       | Caso de Teste                 | Documentado | Automatizado |
| ------------- | ----------------------------- | ----------- | ------------ |
|Enviar dinheiro| Enviar com saldo suficiente   | ✅          | ✅          |
|Enviar dinheiro| Enviar com saldo insuficiente | ⏳           | ⏳          |
---

# 📈 Roadmap

## Exercícios

* [x] Login com sucesso
* [x] Login inválido
* [x] Registro de usuário
* [x] Registro inválido
* [x] Enviar dinheiro com saldo suficiente
* [ ] Enviar dinheiro com saldo insuficiente

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

## v0.3

- Automação do fluxo de registro de novo usuário;
- Documentação do caso de teste CT03;
- Incvlusão da validação de login com sucesso utilizando o usuário
  recém-criado.
- Atualização do README com o progresso do projeto.

## v0.4

- Automação do cenário de registro com informações incompletas;
- Validação das mensagens de erro para campos obrigatórios;
- Atualização da documentação do README;
- Conclusão dos exercícios de Login e Registro de Usuário.

## v0.5

- Criação dos casos de teste da feature **Enviar Dinheiro**;
- Automação do cenário de transferência com saldo suficiente;
- Automação do cenário de saldo insuficiente;
- Registro da divergência identificada entre o comportamento esperado pelo exercício e a   implementação atual da Real World App;
- Atualização da documentação do README.

## Próximas versões
* Visualizar histórico de transações;
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
* Validação completa do fluxo de negócio, garantindo que um usuário recém-cadastrado consiga
  autenticar-se com sucesso na aplicação.

---

# 👨‍💻 Autor

**Raphael D' Assunção Coelho**

Quality Assurance Analyst | Analista de Implantação de ERP

Cypress • Testes Funcionais • Automação de Testes • Implantação de ERP • Regras de Negócio
