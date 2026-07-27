# 🖥 Wireframes

> Documento responsável por descrever as telas do aplicativo **Dom Gringo Barbershop**, seus componentes e o fluxo de navegação entre elas.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Fluxo Geral](#-fluxo-geral)
- [Tela de Login](#-tela-de-login)
- [Tela de Cadastro](#-tela-de-cadastro)
- [Tela Inicial](#-tela-inicial)
- [Tela de Agendamento](#-tela-de-agendamento)
- [Tela Meus Agendamentos](#-tela-meus-agendamentos)
- [Tela do Plano Mensal](#-tela-do-plano-mensal)
- [Tela Perfil](#-tela-perfil)
- [Painel Administrativo](#-painel-administrativo)
- [Fluxo de Navegação](#-fluxo-de-navegação)

---

# 🎯 Objetivo

Este documento descreve todas as telas previstas para o aplicativo, seus principais componentes e como o usuário navegará entre elas.

---

# 🔄 Fluxo Geral

```text
Splash

↓

Login

↓

Home

├── Agendamento
├── Meus Agendamentos
├── Plano Mensal
├── Perfil
└── Painel Administrativo (Administrador)
```

---

# 🔑 Tela de Login

## Componentes

- Logo da Dom Gringo
- Campo de e-mail
- Campo de senha
- Botão Entrar
- Botão Criar Conta
- Link Esqueci minha senha

## Ações

Entrar

→ Home

Criar conta

→ Cadastro

Esqueci minha senha

→ Recuperação de senha

---

# 👤 Tela de Cadastro

## Componentes

- Nome
- Telefone
- E-mail
- Senha
- Confirmar senha
- Botão Cadastrar

## Ações

Cadastrar

→ Home

Cancelar

→ Login

---

# 🏠 Tela Inicial

## Componentes

- Saudação ao usuário
- Próximo agendamento
- Plano ativo
- Cortes restantes
- Botão Agendar
- Botão Meus Agendamentos
- Botão Perfil

## Ações

Agendar

→ Tela de Agendamento

Meus Agendamentos

→ Lista de Agendamentos

Perfil

→ Perfil

---

# 📅 Tela de Agendamento

## Componentes

- Calendário
- Lista de horários
- Lista de serviços
- Botão Confirmar

## Fluxo

Selecionar

↓

Data

↓

Horário

↓

Serviço

↓

Confirmar

↓

Agendamento realizado

---

# 📖 Tela Meus Agendamentos

## Componentes

- Lista de agendamentos
- Status
- Data
- Serviço
- Botão Solicitar Cancelamento

## Fluxo

Selecionar agendamento

↓

Solicitar cancelamento

↓

Informar justificativa

↓

Enviar solicitação

---

# 💳 Tela Plano Mensal

## Componentes

- Status do plano
- Cortes restantes
- Data de vencimento
- Histórico de utilização

---

# 👤 Tela Perfil

## Componentes

- Foto
- Nome
- Telefone
- E-mail
- Alterar senha
- Sair

---

# 👨‍💼 Painel Administrativo

## Funcionalidades

- Dashboard
- Clientes
- Agenda
- Serviços
- Pagamentos
- Planos
- Cancelamentos
- Configurações

---

## Dashboard

Exibe informações como:

- Agendamentos do dia
- Clientes ativos
- Planos ativos
- Solicitações de cancelamento

---

## Clientes

Permite:

- visualizar clientes;
- editar informações;
- pesquisar clientes.

---

## Agenda

Permite:

- criar horários;
- editar horários;
- bloquear horários;
- remover horários.

---

## Serviços

Permite:

- cadastrar serviços;
- editar serviços;
- ativar ou desativar serviços.

---

## Pagamentos

Permite:

- registrar pagamentos;
- visualizar histórico;
- pesquisar pagamentos.

---

## Planos

Permite:

- visualizar planos ativos;
- alterar vencimentos;
- renovar planos.

---

## Cancelamentos

Permite:

- visualizar justificativas;
- aprovar cancelamentos;
- recusar cancelamentos;
- abrir conversa no WhatsApp do cliente.

---

## Configurações

Permite alterar:

- WhatsApp da barbearia;
- Instagram;
- Dia padrão de vencimento;
- Configurações gerais.

---

# 🧭 Fluxo de Navegação

## Cliente

```text
Login

↓

Home

├── Agendamento
├── Meus Agendamentos
├── Plano Mensal
└── Perfil
```

---

## Administrador

```text
Login

↓

Dashboard

├── Clientes
├── Agenda
├── Serviços
├── Pagamentos
├── Planos
├── Cancelamentos
└── Configurações
```

---

# 📌 Observações

Os wireframes visuais serão desenvolvidos posteriormente com base neste documento.

Este documento serve como referência para a criação das telas e implementação da interface do aplicativo.
