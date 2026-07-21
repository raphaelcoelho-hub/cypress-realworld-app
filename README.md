# 🚀 Cypress Real World App - QA Automation Portfolio

## 📌 Sobre o Projeto

Este projeto tem como objetivo desenvolver uma suíte de testes automatizados utilizando **Cypress**, aplicando conceitos e boas práticas de **Quality Assurance (QA)** em um ambiente próximo ao encontrado em projetos reais de desenvolvimento de software.

A aplicação utilizada como base é o **Real World App (RWA)**, desenvolvido pela equipe do Cypress, uma aplicação que simula um ambiente financeiro, permitindo funcionalidades como criação de usuários, autenticação, gerenciamento de contas e transferências entre usuários.

O projeto será desenvolvido de forma incremental, adicionando novas funcionalidades, cenários de testes automatizados e melhorias na estrutura do projeto conforme a evolução dos estudos.

---

# 🎯 Objetivo do Projeto

Construir uma suíte de testes automatizados utilizando **Cypress**, validando funcionalidades da aplicação através de cenários de testes funcionais.

Os testes serão desenvolvidos considerando:

- Validação de funcionalidades;
- Cenários positivos e negativos;
- Boas práticas de automação;
- Organização e manutenção dos testes;
- Evolução contínua da suíte de testes.

---

# 🔗 Referências do Projeto

## Aplicação Base

Este projeto utiliza como base o **Cypress Real World App (RWA)**, desenvolvido pela equipe do Cypress.

Repositório oficial:

https://github.com/cypress-io/cypress-realworld-app

---

## Repositório deste Projeto

Implementação dos exercícios e automações desenvolvidas durante os estudos de Cypress:

https://github.com/raphaelcoelho-hub/cypress-realworld-app

---

# 🧪 Features Automatizadas

## 🔐 Feature: Login

### ✅ CT01 - Login com sucesso

**Status:** Concluído

---

## Objetivo

Validar que um usuário cadastrado consegue realizar autenticação na aplicação utilizando credenciais válidas.

---

## Cenário de Teste

### Pré-condição:

- Usuário deve possuir cadastro válido na aplicação.

### Passos realizados:

1. Acessar a tela de login;
2. Informar usuário válido;
3. Informar senha válida;
4. Clicar no botão de login.

### Resultado esperado:

- Usuário deve ser autenticado com sucesso;
- Sistema deve permitir o acesso à aplicação.

---

# 🤖 Automação com Cypress

O cenário de **Login com sucesso** foi automatizado utilizando Cypress através de um teste **End-to-End (E2E)**.

Arquivo responsável pelo teste:

```
feature-login/exercicio-1-login.spec.js
```

---

# 📊 Status do Projeto

| Feature | Cenário | Status |
|---|---|---|
| Login | Login com usuário válido | ✅ Concluído |
| Login | Login com credenciais inválidas | ⏳ Pendente |
| Cadastro | Registro de novo usuário | ⏳ Pendente |
| Cadastro | Registro com dados incompletos | ⏳ Pendente |

---

# 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- VS Code
- Git
- GitHub

---

# 📚 Aprendizados Aplicados

Neste primeiro ciclo do projeto foram aplicados conhecimentos relacionados a:

- Configuração do ambiente Cypress;
- Estruturação de testes End-to-End;
- Criação de cenários de teste;
- Automação do fluxo de autenticação;
- Organização inicial de uma suíte de testes automatizados.

---

# 📈 Próximos Passos

Evolução planejada do projeto:

- [ ] Automatizar login com credenciais inválidas;
- [ ] Automatizar cadastro de usuário;
- [ ] Automatizar validações de mensagens de erro;
- [ ] Implementar melhores práticas de organização dos testes;
- [ ] Evoluir a estrutura da suíte de automação;
- [ ] Aplicar recursos avançados do Cypress.

---

# 👨‍💻 Autor

**Raphael D' Assunção Coelho**

Quality Assurance Analyst | Testes Funcionais & Automação | ERP & Regras de Negócio