# 📜 Regras de Negócio

> Documento responsável por definir todas as regras que controlam o funcionamento do sistema **Dom Gringo Barbershop**.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Cadastro e Autenticação](#-cadastro-e-autenticação)
- [Agendamentos](#-agendamentos)
- [Cancelamentos](#-cancelamentos)
- [Plano Mensal](#-plano-mensal)
- [Pagamentos](#-pagamentos)
- [Administrador](#-administrador)
- [Comunicação](#-comunicação)
- [Observações](#-observações)

---

# 🎯 Objetivo

Este documento define todas as regras de negócio que controlam o funcionamento do aplicativo Dom Gringo Barbershop.

Enquanto os requisitos especificam as funcionalidades do sistema, este documento descreve como essas funcionalidades deverão se comportar durante sua utilização.

---

# 👤 Cadastro e Autenticação

## Cadastro

- Cada cliente poderá possuir apenas uma conta.
- O e-mail deverá ser único.
- O telefone deverá ser único.
- O cadastro será realizado através de nome, telefone, e-mail e senha.

---

## Login

- Clientes e administradores utilizarão autenticação por e-mail e senha.
- Apenas usuários autenticados poderão acessar funcionalidades privadas do sistema.

---

# 📅 Agendamentos

## Agendamento

- O cliente poderá agendar apenas horários disponíveis.
- Não será permitido agendar horários já ocupados.
- Não será permitido agendar horários passados.
- O administrador poderá criar novos horários disponíveis manualmente.
- O administrador também poderá utilizar horários previamente configurados.

---

## Horários

Os horários poderão possuir diferentes durações.

Exemplos:

- Corte tradicional
  - 30 minutos

- Corte + barba
  - 1 hora

- Corte + barba + pigmentação

- Procedimentos especiais
  - duração personalizada

Essa flexibilidade permitirá um melhor aproveitamento da agenda.

---

## Horário Recorrente

Clientes poderão possuir um horário recorrente.

Exemplo:

- Toda quinta-feira
- Às 18:00

O sistema utilizará esse horário como preferência para os próximos agendamentos.

Caso necessário, o cliente poderá solicitar:

- alteração apenas de um atendimento específico;
- alteração definitiva do horário recorrente.

---

## Status dos Agendamentos

Cada agendamento possuirá um status.

Possíveis status:

- Agendado
- Solicitação de Cancelamento
- Cancelado
- Concluído

---

# ❌ Cancelamentos

O cliente poderá solicitar o cancelamento de um agendamento.

Para isso deverão ser respeitadas as seguintes regras:

- O cancelamento poderá ser solicitado até **1 hora antes** do horário marcado.
- O cliente deverá informar uma justificativa.
- A solicitação será enviada ao administrador.
- O administrador poderá aprovar ou recusar o cancelamento.

Antes da decisão, o administrador poderá:

- visualizar a justificativa enviada;
- abrir uma conversa diretamente pelo WhatsApp do cliente para discutir a solicitação.

Após a aprovação:

- o horário voltará automaticamente para a agenda.

Caso recusado:

- o agendamento permanecerá normalmente.

---

# 💳 Plano Mensal

O plano mensal possui as seguintes regras.

## Quantidade de cortes

Cada plano permite:

- até 4 cortes por mês.

Após utilizar todos os cortes:

- o cliente permanecerá com o plano ativo;
- porém não poderá realizar novos agendamentos utilizando o plano até a próxima renovação.

---

## Validade

Os planos funcionam por competência mensal.

Exemplo:

Plano referente ao mês de Julho.

O cliente poderá utilizar seus cortes até o encerramento desse mês.

No mês seguinte será iniciado um novo ciclo.

---

## Vencimento

O sistema permitirá definir uma data padrão para vencimento dos planos.

Além disso, o administrador poderá cadastrar exceções para clientes específicos.

Exemplo:

Data padrão:

- Dia 05

Exceções:

Cliente João

- Dia 10

Cliente Pedro

- Dia 20

---

## Renovação

Ao iniciar um novo período:

- a quantidade de cortes será restaurada automaticamente;
- desde que o pagamento do plano esteja regularizado.

---

# 💰 Pagamentos

Nesta primeira versão do sistema:

- os pagamentos serão registrados manualmente pelo administrador.

O sistema apenas armazenará:

- valor;
- forma de pagamento;
- data;
- observações.

---

## Valores

### Corte Avulso

Pix

R$ 35,00

Dinheiro

R$ 35,00

Cartão

R$ 40,00

---

### Plano Mensal

Pix

R$ 90,00

Dinheiro

R$ 90,00

Cartão

R$ 95,00

---

# 👨‍💼 Administrador

O administrador possuirá acesso completo ao sistema.

Entre suas responsabilidades estão:

- gerenciar clientes;
- cadastrar horários;
- editar horários;
- bloquear horários;
- registrar pagamentos;
- aprovar cancelamentos;
- visualizar estatísticas;
- gerenciar planos;
- acessar o painel administrativo.

---

# 📲 Comunicação

O aplicativo disponibilizará acesso rápido para:

- WhatsApp da barbearia;
- Instagram oficial.

Além disso, durante solicitações de cancelamento, o administrador poderá iniciar uma conversa diretamente com o cliente através do WhatsApp cadastrado.

---

# 📌 Observações

Estas regras representam o comportamento esperado da versão inicial do sistema.

Novas regras poderão ser adicionadas conforme a evolução do projeto e das necessidades da barbearia.
