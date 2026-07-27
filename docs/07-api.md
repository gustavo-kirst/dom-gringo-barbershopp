# 🔌 Integração com Firebase

> Documento responsável por descrever como o aplicativo **Dom Gringo Barbershop** realiza a comunicação com os serviços do Firebase.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Visão Geral](#-visão-geral)
- [Firebase Authentication](#-firebase-authentication)
- [Cloud Firestore](#-cloud-firestore)
- [Firebase Storage](#-firebase-storage)
- [Coleções Utilizadas](#-coleções-utilizadas)
- [Fluxo de Comunicação](#-fluxo-de-comunicação)
- [Segurança](#-segurança)
- [Observações](#-observações)

---

# 🎯 Objetivo

Este documento apresenta como o aplicativo se comunica com os serviços do Firebase.

Como o projeto não possui um backend próprio, toda a persistência dos dados será realizada utilizando os serviços disponibilizados pelo Firebase.

---

# ☁ Visão Geral

A arquitetura da aplicação utilizará os seguintes serviços:

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

Cada serviço será responsável por uma parte específica do sistema.

---

# 🔐 Firebase Authentication

Responsável pela autenticação dos usuários.

## Funcionalidades

- Cadastro de usuários
- Login
- Logout
- Recuperação de senha
- Verificação do usuário autenticado

---

# 🗄 Cloud Firestore

Responsável pelo armazenamento de todos os dados da aplicação.

As principais operações realizadas serão:

- Criar documentos
- Consultar documentos
- Atualizar documentos
- Excluir documentos

---

# 🖼 Firebase Storage

Responsável pelo armazenamento de arquivos.

Inicialmente será utilizado para:

- Foto de perfil dos usuários

No futuro poderá armazenar:

- Imagens da barbearia
- Fotos de serviços
- Outros arquivos necessários

---

# 📂 Coleções Utilizadas

O aplicativo utilizará as seguintes coleções:

- users
- appointments
- services
- plans
- payments
- schedule
- settings

---

# 🔄 Fluxo de Comunicação

## Login

```text
Aplicativo
      │
      ▼
Firebase Authentication
      │
      ▼
Usuário autenticado
```

---

## Cadastro

```text
Aplicativo
      │
      ▼
Firebase Authentication
      │
      ▼
Cloud Firestore
```

Após a criação da conta no Authentication, as informações complementares do usuário serão armazenadas na coleção **users**.

---

## Agendamentos

```text
Aplicativo
      │
      ▼
Cloud Firestore
      │
      ▼
appointments
```

---

## Consulta de Serviços

```text
Aplicativo
      │
      ▼
Cloud Firestore
      │
      ▼
services
```

---

## Consulta da Agenda

```text
Aplicativo
      │
      ▼
Cloud Firestore
      │
      ▼
schedule
```

---

## Pagamentos

```text
Aplicativo
      │
      ▼
Cloud Firestore
      │
      ▼
payments
```

---

# 🔒 Segurança

O acesso às informações será controlado pelas regras de segurança do Firebase.

As principais regras serão:

- Apenas usuários autenticados poderão acessar informações privadas.
- Cada cliente poderá visualizar apenas seus próprios dados.
- Apenas administradores poderão cadastrar, editar ou excluir informações administrativas.
- Operações sensíveis serão protegidas por permissões específicas.

---

# ⚡ Tratamento de Erros

A aplicação deverá tratar possíveis falhas durante a comunicação com o Firebase.

Exemplos:

- Falha de conexão com a internet;
- Usuário ou senha inválidos;
- Permissão insuficiente;
- Documento inexistente;
- Erros inesperados.

Sempre que possível, mensagens amigáveis deverão ser exibidas ao usuário.

---

# 📌 Observações

Como o projeto utiliza Firebase como Backend as a Service (BaaS), não será necessária a implementação de uma API REST própria.

Toda a comunicação será realizada diretamente entre o aplicativo e os serviços disponibilizados pelo Firebase.