# 🗄 Banco de Dados

> Documento responsável por definir a estrutura do banco de dados utilizado pelo aplicativo **Dom Gringo Barbershop**.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Tecnologia Utilizada](#-tecnologia-utilizada)
- [Estrutura do Banco](#-estrutura-do-banco)
- [Coleções](#-coleções)
- [Relacionamentos](#-relacionamentos)
- [Observações](#-observações)

---

# 🎯 Objetivo

Este documento descreve a estrutura do banco de dados da aplicação.

Seu objetivo é definir quais coleções existirão, quais informações serão armazenadas e como os dados se relacionam entre si.

---

# 🔥 Tecnologia Utilizada

O aplicativo utilizará os seguintes serviços do Firebase:

## Firebase Authentication

Responsável por:

- Cadastro de usuários;
- Login;
- Recuperação de senha.

---

## Cloud Firestore

Responsável pelo armazenamento de todos os dados da aplicação.

---

## Firebase Storage

Responsável pelo armazenamento de arquivos, como:

- Foto de perfil;
- Imagens futuras do aplicativo.

---

# 🗂 Estrutura do Banco

O banco de dados será composto pelas seguintes coleções:

```text
users
appointments
plans
payments
services
schedule
settings
```

---

# 👤 Coleção: users

Armazena as informações dos usuários cadastrados.

| Campo             | Tipo      | Descrição                     |
| ----------------- | --------- | ----------------------------- |
| id                | String    | ID do Firebase Authentication |
| name              | String    | Nome completo                 |
| email             | String    | E-mail                        |
| phone             | String    | Telefone                      |
| role              | String    | client ou admin               |
| photo             | String    | URL da foto de perfil         |
| activePlan        | Boolean   | Indica se possui plano ativo  |
| remainingCuts     | Number    | Cortes restantes no mês       |
| recurringSchedule | Object    | Horário recorrente do cliente |
| createdAt         | Timestamp | Data de cadastro              |

### Exemplo

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(53)99999-9999",
  "role": "client",
  "activePlan": true,
  "remainingCuts": 4
}
```

---

# 💈 Coleção: services

Armazena todos os serviços oferecidos pela barbearia.

> **Observação:** Os serviços, preços e duração poderão ser alterados futuramente conforme definição da barbearia.

| Campo        | Tipo    | Descrição                           |
| ------------ | ------- | ----------------------------------- |
| id           | String  | Identificador                       |
| name         | String  | Nome do serviço                     |
| duration     | Number  | Duração em minutos                  |
| pricePix     | Number  | Valor no Pix                        |
| priceCash    | Number  | Valor em dinheiro                   |
| priceCard    | Number  | Valor no cartão                     |
| planEligible | Boolean | Pode ser utilizado no plano mensal  |
| active       | Boolean | Serviço disponível para agendamento |

### Exemplo

```json
{
  "name": "Corte Tradicional",
  "duration": 30,
  "pricePix": 35,
  "priceCash": 35,
  "priceCard": 40,
  "planEligible": true,
  "active": true
}
```

---

# 📅 Coleção: appointments

Armazena os agendamentos realizados.

| Campo        | Tipo      | Descrição              |
| ------------ | --------- | ---------------------- |
| id           | String    | Identificador          |
| userId       | String    | Cliente                |
| serviceId    | String    | Serviço selecionado    |
| date         | Timestamp | Data e horário         |
| duration     | Number    | Duração do atendimento |
| status       | String    | Status do agendamento  |
| cancelReason | String    | Motivo do cancelamento |
| createdAt    | Timestamp | Data de criação        |

## Status possíveis

- scheduled
- cancel_request
- cancelled
- completed

### Exemplo

```json
{
  "userId": "uid123",
  "serviceId": "service001",
  "date": "2026-08-10T18:00:00",
  "duration": 30,
  "status": "scheduled"
}
```

---

# 💳 Coleção: plans

Armazena os planos mensais dos clientes.

| Campo         | Tipo    | Descrição         |
| ------------- | ------- | ----------------- |
| id            | String  | Identificador     |
| userId        | String  | Cliente           |
| month         | String  | Mês de referência |
| year          | Number  | Ano               |
| remainingCuts | Number  | Cortes restantes  |
| paymentDay    | Number  | Dia de vencimento |
| active        | Boolean | Plano ativo       |

### Exemplo

```json
{
  "userId": "uid123",
  "month": "Julho",
  "year": 2026,
  "remainingCuts": 3,
  "paymentDay": 5,
  "active": true
}
```

---

# 💰 Coleção: payments

Armazena o histórico de pagamentos.

| Campo       | Tipo      | Descrição          |
| ----------- | --------- | ------------------ |
| id          | String    | Identificador      |
| userId      | String    | Cliente            |
| value       | Number    | Valor pago         |
| method      | String    | Forma de pagamento |
| description | String    | Observações        |
| paidAt      | Timestamp | Data do pagamento  |

## Métodos de pagamento

- Pix
- Dinheiro
- Cartão

---

# 📅 Coleção: schedule

Armazena os horários disponíveis da agenda.

| Campo     | Tipo      | Descrição                     |
| --------- | --------- | ----------------------------- |
| id        | String    | Identificador                 |
| date      | Timestamp | Data e horário                |
| duration  | Number    | Duração disponível            |
| available | Boolean   | Horário disponível            |
| blocked   | Boolean   | Horário bloqueado manualmente |

---

# ⚙ Coleção: settings

Armazena configurações gerais da barbearia.

| Campo              | Tipo   | Descrição                           |
| ------------------ | ------ | ----------------------------------- |
| defaultPaymentDay  | Number | Dia padrão de vencimento dos planos |
| whatsapp           | String | Número da barbearia                 |
| instagram          | String | Perfil oficial                      |
| defaultCutDuration | Number | Duração padrão dos cortes           |

---

# 🔗 Relacionamentos

```text
                users
                  │
      ┌───────────┼────────────┐
      │           │            │
appointments     plans      payments
      │
      │
 services

schedule (horários disponíveis)

settings (configurações gerais)
```

---

# 📌 Observações

- O Firebase Authentication será responsável apenas pela autenticação dos usuários.
- As informações complementares dos usuários serão armazenadas no Cloud Firestore.
- A coleção **services** poderá ser alterada futuramente conforme novos serviços forem disponibilizados pela barbearia.
- Os preços cadastrados poderão ser atualizados sem necessidade de alterar o código da aplicação.
- A estrutura apresentada representa a primeira versão do banco de dados e poderá evoluir durante o desenvolvimento do projeto.
