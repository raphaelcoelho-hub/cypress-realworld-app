# 🚀 Cypress Real World App (RWA) | Automação de Testes

## 📌 Sobre o projeto

Este repositório reúne os exercícios que desenvolvi durante o curso **Guardião da Qualidade**, utilizando o **Cypress Real World App (RWA)**.

O objetivo é praticar a criação de casos de teste e sua automação em uma aplicação real, aplicando conceitos de Quality Assurance (QA), testes funcionais e testes End-to-End (E2E).

Projeto oficial utilizado como base:

https://github.com/cypress-io/cypress-realworld-app

---

## 🎯 Objetivo

Automatizar cenários da aplicação Real World App utilizando Cypress, colocando em prática:

- Criação de casos de teste;
- Testes funcionais;
- Testes End-to-End (E2E);
- Cenários positivos e negativos;
- Organização da suíte de testes;
- Boas práticas de automação.

---

## 🛠 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub
- Visual Studio Code

---

## 📁 Estrutura do projeto

```text
cypress/
│
├── fixtures/
├── support/
└── tests/
    ├── api/
    ├── demo/
    └── ui/
        ├── cadastro.spec.js
        ├── historico.spec.js
        ├── login.spec.js
        └── transacao.spec.js

cypress.config.ts
package.json
README.md
```

*A estrutura será atualizada conforme novos exercícios forem desenvolvidos.*

---

## ▶️ Como executar

Clone o repositório:

```bash
git clone https://github.com/raphaelcoelho-hub/cypress-realworld-app.git
```

Entre na pasta:

```bash
cd cypress-realworld-app
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação seguindo as instruções do repositório oficial do Cypress Real World App.

Execute os testes:

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

---

# 🧪 Casos de teste

## 🔐 Login

### ✅ CT01 — Login com sucesso

**Objetivo**

Validar que um usuário consegue acessar a aplicação utilizando credenciais válidas.

**Resultado esperado**

- Login realizado com sucesso;
- Redirecionamento para a página inicial.

**Arquivo**

`cypress/tests/ui/login.spec.js`

---

### ✅ CT02 — Login com credenciais inválidas

**Objetivo**

Garantir que usuários não consigam acessar a aplicação utilizando credenciais inválidas.

**Resultado esperado**

- Login não realizado;
- Permanência na tela de autenticação;
- Exibição da mensagem:

```
Username or password is invalid
```

**Arquivo**

`cypress/tests/ui/login.spec.js`

---

## 👤 Registro de usuário

### ✅ CT03 — Cadastro com sucesso

**Objetivo**

Validar o cadastro de um novo usuário utilizando informações válidas.

**Resultado esperado**

- Usuário cadastrado com sucesso;
- Redirecionamento para a tela de login;
- Login realizado utilizando o usuário criado durante o teste.

**Arquivo**

`cypress/tests/ui/cadastro.spec.js`

---

### ✅ CT04 — Cadastro com informações incompletas

**Objetivo**

Validar que o sistema impeça o cadastro quando existirem campos obrigatórios não preenchidos.

**Resultado esperado**

- Cadastro não realizado;
- As mensagens de validação dos campos obrigatórios devem ser exibidas;
- Permanência na tela de cadastro.

**Arquivo**

`cypress/tests/ui/cadastro.spec.js`

---

## 💸 Enviar dinheiro

### ✅ CT05 — Transferência com saldo suficiente

**Objetivo**

Validar que uma transferência seja concluída quando houver saldo disponível.

**Resultado esperado**

- Transferência realizada com sucesso;
- Saldo atualizado;
- Registro da transação no histórico.

**Arquivo**

`cypress/tests/ui/transacao.spec.js`

---

### ⚠️ CT06 — Transferência com saldo insuficiente

**Status**

Automatizado — O teste permanece falhando devido a um bug identificado na aplicação.

**Objetivo**

Validar que o sistema impeça uma transferência quando o valor informado for maior que o saldo disponível.

**Resultado esperado**

- A transferência não deve ser concluída;
- O sistema deve informar que não há saldo suficiente.

**Arquivo**

`cypress/tests/ui/transacao.spec.js`

---

# 🐞 Bug identificado

Durante a execução do cenário **CT06**, foi identificado que a aplicação permite concluir uma transferência mesmo quando o usuário não possui saldo suficiente.

### Passos para reproduzir

1. Fazer login com um usuário sem saldo suficiente;
2. Acessar **Nova Transação**;
3. Selecionar um destinatário;
4. Informar um valor maior que o saldo disponível;
5. Confirmar a transferência.

### Resultado esperado

A aplicação deve impedir a transferência e informar ao usuário que o saldo é insuficiente.

### Resultado obtido

A transferência é concluída com sucesso e a API responde com **HTTP 200**, permitindo uma operação que não atende à regra de negócio esperada.

**Observação**

A automação foi mantida exatamente como esperado pelo caso de teste para evidenciar esse comportamento até que a aplicação seja corrigida.

---

---

## 📜 Histórico de Transações

### ✅ CT07 — Visualizar histórico de transações com sucesso

**Objetivo**

Validar que um usuário consiga visualizar corretamente seu histórico de transações.

**Resultado esperado**

- O histórico de transações deve ser exibido;
- As transações realizadas devem aparecer corretamente na listagem.

**Arquivo**

`cypress/tests/ui/historico.spec.js`

---

### ✅ CT08 — Visualizar histórico de um usuário sem transações

**Objetivo**

Validar que o sistema informe ao usuário quando não existirem transações registradas.

**Resultado esperado**

- O histórico deve ser exibido sem transações;
- O sistema deve apresentar uma mensagem informando que o usuário não possui transações anteriores.


**Arquivo**

`cypress/tests/ui/historico.spec.js`

---

### ✅ CT09 — Validação completa do fluxo de transações (End-to-End)

**Objetivo**

Validar o fluxo completo de uma solicitação de pagamento entre dois usuários, garantindo que a transação seja registrada corretamente para o remetente e para o destinatário.

**Resultado esperado**

- A solicitação de pagamento deve ser criada com sucesso;
- O remetente deve visualizar a transação em seu histórico;
- O destinatário também deve visualizar a mesma transação em seu histórico.

**Arquivo**

`cypress/tests/ui/historico.spec.js`

---

## 📊 Status do projeto

| Feature                  | Documentado  | Automatizado |
|--------------------------|--------------|--------------|
| Login                    | ✅          | ✅           |
| Registro de Usuário      | ✅          | ✅           |
| Enviar Dinheiro          | ✅          | ✅*          |
| Histórico de Transações  | ✅          | ✅           |


> *O cenário de saldo insuficiente está automatizado e evidencia um bug conhecido na aplicação.*

---

## 📈 Próximos passos
- Refatorar a estrutura dos testes;
- Criar Custom Commands;
- Utilizar Fixtures;
- Reduzir código duplicado;
- Configurar geração de relatórios;
- Configurar integração contínua com GitHub Actions.

---

## 👨‍💻 Autor

**Raphael D'Assunção Coelho**

Quality Assurance | Analista de Implantação de ERP

GitHub: https://github.com/raphaelcoelho-hub