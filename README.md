<div align="center">

<img src="./assets/logo-gringo.jpg" width="150"/>

# 💈 Dom Gringo Barbershop

### Sistema Mobile para Gerenciamento Inteligente de Barbearia

Aplicativo desenvolvido para proporcionar uma experiência moderna, rápida e intuitiva tanto para clientes quanto para administradores da Dom Gringo Barbershop.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

</div>

---

# 📖 Sobre o Projeto

O **Dom Gringo Barbershop** é um aplicativo mobile criado para digitalizar completamente o gerenciamento da barbearia.

O sistema foi pensado para eliminar a necessidade de agendamentos realizados exclusivamente pelo WhatsApp, oferecendo uma plataforma moderna onde clientes podem marcar horários, acompanhar seus planos mensais e consultar seu histórico de cortes.

Além da experiência do cliente, o aplicativo disponibiliza uma área administrativa completa para gerenciamento de toda a operação da barbearia.

O projeto busca unir praticidade, organização e identidade visual forte, inspirada na cultura **Streetwear**, **Skate** e **Old School Barbershop**, transmitindo uma imagem premium e profissional.

---

# 🎯 Objetivos

O principal objetivo do projeto é oferecer uma solução completa para gerenciamento da Dom Gringo Barbershop, facilitando tanto o atendimento ao cliente quanto a administração do negócio.

Entre os objetivos estão:

- Automatizar agendamentos.
- Organizar horários disponíveis.
- Eliminar conflitos de agenda.
- Gerenciar pagamentos.
- Controlar planos mensais.
- Melhorar a experiência do cliente.
- Centralizar informações administrativas.
- Disponibilizar estatísticas do negócio.
- Tornar o processo de atendimento mais eficiente.

---

# 🚀 Principais Funcionalidades

## 👤 Área do Cliente

- Cadastro
- Login
- Recuperação de senha
- Edição de perfil
- Agendamento de horários
- Consulta de horários disponíveis
- Cancelamento de agendamentos
- Histórico completo de cortes
- Visualização do plano mensal
- Quantidade de cortes restantes
- Histórico de pagamentos
- Escolha da forma de pagamento
- Contato direto via WhatsApp
- Redirecionamento para Instagram
- Recebimento de notificações
- Consulta de próximos agendamentos

---

## 👨‍💼 Área Administrativa

Dashboard completo contendo:

- Agenda diária
- Agenda semanal
- Agenda mensal
- Clientes cadastrados
- Clientes ativos
- Clientes com plano
- Clientes sem plano
- Controle financeiro
- Pagamentos pendentes
- Pagamentos realizados
- Controle dos planos mensais
- Estatísticas
- Relatórios
- Controle dos horários disponíveis
- Bloqueio de horários
- Cadastro de folgas e férias
- Configurações do sistema

---

# 💳 Planos e Valores

## Corte Avulso

| Forma de Pagamento | Valor    |
| ------------------ | -------- |
| Pix                | R$ 35,00 |
| Dinheiro           | R$ 35,00 |
| Cartão             | R$ 40,00 |

---

## Plano Mensal

Até **4 cortes por mês**

| Forma de Pagamento | Valor    |
| ------------------ | -------- |
| Pix                | R$ 90,00 |
| Dinheiro           | R$ 90,00 |
| Cartão             | R$ 95,00 |

---

# 🎨 Identidade Visual

O aplicativo possui uma identidade visual inspirada em:

- Streetwear
- Skate
- Old School
- Minimalismo
- Barbershop Premium

### Paleta de Cores

| Cor          | Hexadecimal |
| ------------ | ----------- |
| Preto        | #0B0B0B     |
| Cinza Escuro | #1E1E1E     |
| Cinza Médio  | #404040     |
| Cinza Claro  | #D9D9D9     |
| Branco       | #FFFFFF     |

---

# 👥 Tipos de Usuário

O aplicativo possui dois perfis distintos.

## Cliente

Pode:

- Criar conta
- Fazer login
- Agendar cortes
- Cancelar agendamentos
- Visualizar plano
- Consultar histórico
- Editar perfil
- Entrar em contato com o barbeiro

---

## Administrador

Pode:

- Visualizar toda a agenda
- Gerenciar clientes
- Gerenciar horários
- Gerenciar pagamentos
- Criar bloqueios de agenda
- Alterar preços
- Visualizar estatísticas
- Emitir relatórios

---

# 🏗 Arquitetura

O projeto seguirá uma arquitetura baseada em camadas, separando responsabilidades entre interface, regras de negócio e serviços.

```
UI

↓

Screens

↓

Components

↓

Hooks

↓

Contexts

↓

Services

↓

Firebase
```

---

# 📱 Fluxo do Cliente

```
Login

↓

Home

↓

Escolher Data

↓

Escolher Horário

↓

Selecionar Pagamento

↓

Confirmar Agendamento

↓

Administrador recebe a reserva

↓

Cliente recebe confirmação
```

---

# 📊 Fluxo Administrativo

```
Login

↓

Dashboard

↓

Agenda

↓

Clientes

↓

Financeiro

↓

Relatórios

↓

Configurações
```

---

# 🗂 Estrutura do Projeto

```text
Dom-Gringo-Barbershop/

assets/

docs/

src/

README.md

README_PLANEJAMENTO.md
```

---

# 🛠 Tecnologias

## Mobile

- React Native
- Expo
- TypeScript

## Backend

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

## Navegação

- Expo Router

## Formulários

- React Hook Form
- Zod

## Interface

- React Native Paper

## Animações

- React Native Reanimated

## Gestos

- React Native Gesture Handler

## Notificações

- Expo Notifications

## Banco de Dados

- Cloud Firestore

---

# 🔐 Segurança

O sistema contará com:

- Autenticação Firebase
- Controle de acesso por perfil
- Regras de segurança do Firestore
- Validação de formulários
- Proteção de rotas
- Sessão persistente
- Armazenamento seguro de credenciais

---

# 📈 Escalabilidade

O projeto será desenvolvido visando futuras expansões.

Entre elas:

- Múltiplos barbeiros
- Sistema de fidelidade
- Cashback
- Cupons de desconto
- QR Code para check-in
- Avaliações
- Galeria de cortes
- Marketplace de produtos
- Venda de cosméticos
- Pagamentos online
- Integração com Google Calendar

---

# 📋 Roadmap

## Versão 1.0

- Sistema de Login
- Cadastro
- Agendamento
- Dashboard
- Plano Mensal
- Financeiro

---

## Versão 1.1

- Notificações
- QR Code
- Relatórios
- Histórico Financeiro

---

## Versão 2.0

- Multi Barbeiros
- Programa de Fidelidade
- Marketplace
- Cupons
- Avaliações
- Painel Web

---

# 📸 Preview

Em desenvolvimento.

---

# 📚 Documentação

Toda a documentação do projeto estará disponível na pasta **/docs**.

- Visão Geral
- Requisitos
- Regras de Negócio
- Arquitetura
- Banco de Dados
- API
- Design System
- Wireframes
- Testes
- Roadmap

---

# 🤝 Contribuição

Este projeto está sendo desenvolvido como um software proprietário para gerenciamento da Dom Gringo Barbershop.

Contribuições futuras poderão ser realizadas mediante aprovação.

---

# 👨‍💻 Desenvolvedor

**Gustavo Kirst**

Desenvolvido com foco em qualidade de software, arquitetura escalável e experiência do usuário.

---

# 📄 Licença

Este projeto possui uso privado e todos os direitos estão reservados à Dom Gringo Barbershop.
