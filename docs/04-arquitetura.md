# 🏗 Arquitetura do Sistema

> Documento responsável por apresentar a arquitetura utilizada no desenvolvimento do aplicativo **Dom Gringo Barbershop**, bem como sua organização estrutural.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Visão Geral da Arquitetura](#-visão-geral-da-arquitetura)
- [Tecnologias](#-tecnologias)
- [Arquitetura da Aplicação](#-arquitetura-da-aplicação)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Camadas do Sistema](#-camadas-do-sistema)
- [Integração com Firebase](#-integração-com-firebase)
- [Escalabilidade](#-escalabilidade)
- [Observações](#-observações)

---

# 🎯 Objetivo

Este documento apresenta a arquitetura adotada para o desenvolvimento do aplicativo Dom Gringo Barbershop.

Seu objetivo é definir a organização do projeto, facilitar a manutenção do código e garantir que futuras funcionalidades possam ser adicionadas sem grandes alterações estruturais.

---

# 📱 Visão Geral da Arquitetura

O aplicativo seguirá uma arquitetura baseada em componentes, utilizando React Native com Expo.

Toda a comunicação entre a aplicação e os serviços externos será realizada através do Firebase.

A arquitetura foi projetada para priorizar:

- Organização
- Escalabilidade
- Reutilização de código
- Facilidade de manutenção

---

# 🛠 Tecnologias

## Mobile

- React Native
- Expo
- TypeScript

---

## Navegação

- Expo Router

---

## Backend

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

---

## Interface

- React Native Paper

---

## Validação

- React Hook Form
- Zod

---

## Notificações

- Expo Notifications

---

# 🏛 Arquitetura da Aplicação

O fluxo principal da aplicação será:

```text
Usuário

↓

Telas

↓

Componentes

↓

Serviços

↓

Firebase

↓

Firestore / Authentication / Storage
```

Cada camada possui responsabilidades específicas.

---

## Telas

Responsáveis por apresentar informações ao usuário.

Exemplos:

- Login
- Cadastro
- Home
- Agenda
- Perfil

---

## Componentes

Elementos reutilizáveis da interface.

Exemplos:

- Botões
- Cards
- Inputs
- Modal
- Calendário
- Barra de navegação

---

## Serviços

Responsáveis pela comunicação com o Firebase.

Exemplos:

- Login
- Cadastro
- Agendamentos
- Clientes
- Planos
- Financeiro

---

# 📂 Estrutura de Pastas

```text
src/

├── app/
├── assets/
├── components/
├── constants/
├── hooks/
├── services/
├── contexts/
├── utils/
├── types/
├── styles/
└── firebase/
```

---

## app/

Contém todas as telas do aplicativo utilizando Expo Router.

---

## assets/

Armazena:

- imagens
- fontes
- ícones

---

## components/

Componentes reutilizáveis.

Exemplos:

- Button
- Card
- Input
- Modal
- Avatar

---

## constants/

Constantes do sistema.

Exemplo:

- cores
- rotas
- textos
- configurações

---

## hooks/

Hooks personalizados.

Exemplo:

- autenticação
- usuário
- tema
- agendamento

---

## services/

Comunicação com Firebase.

---

## contexts/

Gerenciamento de estados globais.

Exemplos:

- Usuário
- Tema
- Autenticação

---

## utils/

Funções auxiliares.

---

## types/

Interfaces e tipos TypeScript.

---

## styles/

Temas globais da aplicação.

---

## firebase/

Arquivos de configuração do Firebase.

---

# 🧱 Camadas do Sistema

## Interface

Responsável pela interação com o usuário.

---

## Regras de Negócio

Responsável pelo processamento das informações.

---

## Persistência

Responsável pelo armazenamento de dados utilizando Cloud Firestore.

---

# 🔥 Integração com Firebase

O Firebase será utilizado para:

- autenticação de usuários;
- armazenamento de informações;
- armazenamento de imagens;
- recuperação de senha;
- notificações futuras.

---

# 📈 Escalabilidade

A arquitetura foi planejada para permitir futuras expansões, como:

- múltiplos barbeiros;
- múltiplas unidades;
- pagamentos online;
- programa de fidelidade;
- notificações automáticas;
- integração com calendário.

---

# 📝 Observações

Esta arquitetura poderá evoluir durante o desenvolvimento, mantendo sempre a organização modular e a separação de responsabilidades.