# 📋 Requisitos do Sistema

> Documento responsável por descrever todos os requisitos funcionais e não funcionais do sistema **Dom Gringo Barbershop**.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Requisitos Funcionais](#-requisitos-funcionais)
- [Requisitos Não Funcionais](#-requisitos-não-funcionais)
- [Regras Gerais](#-regras-gerais)
- [Observações](#-observações)

---

# 🎯 Objetivo

Este documento especifica os requisitos do sistema Dom Gringo Barbershop, descrevendo todas as funcionalidades esperadas e os requisitos técnicos necessários para o desenvolvimento da aplicação.

Os requisitos estão organizados por módulos e classificados de acordo com sua prioridade.

---

# 📱 Requisitos Funcionais

## Módulo de Autenticação

---

### RF001 - Cadastro de Cliente

**Descrição**

O sistema deve permitir que novos clientes criem uma conta utilizando nome, e-mail, telefone e senha.

**Prioridade**

🔴 Alta

**Usuários**

- Cliente

**Critérios de Aceitação**

- O e-mail deve ser único.
- Todos os campos obrigatórios devem ser preenchidos.
- A senha deve atender aos requisitos mínimos de segurança.
- O usuário deve ser autenticado após o cadastro.

---

### RF002 - Login

**Descrição**

O sistema deve permitir que clientes e administradores realizem login utilizando e-mail e senha.

**Prioridade**

🔴 Alta

**Usuários**

- Cliente
- Administrador

**Critérios de Aceitação**

- Validar credenciais.
- Exibir mensagem em caso de erro.
- Manter sessão ativa.
- Redirecionar para a tela correspondente ao perfil.

---

### RF003 - Recuperação de Senha

**Descrição**

O sistema deve permitir que usuários recuperem sua senha através do e-mail cadastrado.

**Prioridade**

🟡 Média

---

## Módulo de Perfil

---

### RF004 - Visualizar Perfil

O usuário poderá visualizar seus dados pessoais.

---

### RF005 - Editar Perfil

O usuário poderá alterar:

- Nome
- Telefone
- Foto de Perfil

---

## Módulo de Agendamento

---

### RF006 - Visualizar Horários Disponíveis

O sistema deverá exibir apenas horários livres para agendamento.

---

### RF007 - Agendar Horário

O cliente poderá selecionar:

- Data
- Horário

Após confirmação, o horário ficará indisponível para outros clientes.

---

### RF008 - Cancelar Agendamento

O cliente poderá cancelar um agendamento respeitando as regras definidas pela barbearia.

---

### RF009 - Histórico de Agendamentos

O cliente poderá visualizar todos os atendimentos já realizados.

---

## Módulo de Plano Mensal

---

### RF010 - Visualizar Plano

O cliente poderá consultar:

- Situação do plano
- Data de validade
- Cortes restantes

---

### RF011 - Controle Automático do Plano

Após cada atendimento confirmado, o sistema deverá atualizar automaticamente a quantidade de cortes disponíveis.

---

## Módulo Financeiro

---

### RF012 - Registro de Pagamentos

O administrador poderá registrar pagamentos realizados.

---

### RF013 - Histórico Financeiro

O administrador poderá consultar pagamentos anteriores.

---

## Módulo Administrativo

---

### RF014 - Dashboard

O administrador deverá visualizar indicadores gerais da barbearia.

---

### RF015 - Gerenciamento da Agenda

O administrador poderá:

- Criar horários
- Editar horários
- Bloquear horários
- Remover horários

---

### RF016 - Gerenciamento de Clientes

O administrador poderá visualizar:

- Clientes cadastrados
- Histórico de cortes
- Plano ativo
- Informações pessoais

---

### RF017 - Estatísticas

O sistema deverá apresentar indicadores como:

- Clientes cadastrados
- Agendamentos do dia
- Receita mensal
- Planos ativos

---

### RF018 - Configurações

O administrador poderá alterar configurações gerais do sistema.

---

## Módulo de Comunicação

---

### RF019 - Contato via WhatsApp

O sistema deverá disponibilizar acesso direto ao WhatsApp da barbearia.

---

### RF020 - Instagram

O sistema deverá disponibilizar acesso ao perfil oficial da barbearia.

---

# ⚙️ Requisitos Não Funcionais

## RNF001 - Desempenho

As principais telas deverão carregar em até 3 segundos em condições normais de uso.

---

## RNF002 - Segurança

A autenticação deverá ser realizada através do Firebase Authentication.

---

## RNF003 - Disponibilidade

O sistema deverá estar disponível sempre que houver conexão com a internet.

---

## RNF004 - Responsividade

A interface deverá adaptar-se corretamente a diferentes tamanhos de tela.

---

## RNF005 - Usabilidade

O aplicativo deverá possuir navegação simples, intuitiva e consistente.

---

## RNF006 - Escalabilidade

A arquitetura deverá permitir futuras funcionalidades sem necessidade de grandes alterações estruturais.

---

## RNF007 - Manutenibilidade

O código deverá seguir boas práticas de organização e modularização para facilitar futuras manutenções.

---

## RNF008 - Compatibilidade

O aplicativo deverá ser compatível com dispositivos Android compatíveis com a versão mínima definida pelo projeto.

---

# 📌 Regras Gerais

- Cada cliente poderá possuir apenas uma conta.
- Um horário poderá ser reservado por apenas um cliente.
- Apenas administradores terão acesso ao painel administrativo.
- Todas as operações críticas deverão exigir autenticação.
- Informações do cliente deverão permanecer protegidas.

---

# 📝 Observações

Este documento descreve apenas os requisitos do sistema.

As regras específicas de funcionamento de cada funcionalidade serão detalhadas no documento **03-regras-de-negocio.md**.