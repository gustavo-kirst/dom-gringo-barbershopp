# 🧪 Plano de Testes

> Documento responsável por definir a estratégia de testes utilizada no aplicativo **Dom Gringo Barbershop**.

---

# 📑 Índice

- [Objetivo](#-objetivo)
- [Estratégia de Testes](#-estratégia-de-testes)
- [Tipos de Testes](#-tipos-de-testes)
- [Casos de Teste](#-casos-de-teste)
- [Critérios de Aceitação](#-critérios-de-aceitação)
- [Tratamento de Erros](#-tratamento-de-erros)
- [Observações](#-observações)

---

# 🎯 Objetivo

Este documento apresenta a estratégia de testes que será utilizada durante o desenvolvimento do aplicativo Dom Gringo Barbershop.

Seu objetivo é garantir que as funcionalidades implementadas atendam aos requisitos definidos e ofereçam uma boa experiência ao usuário.

---

# 📝 Estratégia de Testes

Os testes serão realizados ao longo do desenvolvimento da aplicação, buscando identificar falhas antes da entrega final.

Serão avaliados aspectos como:

- Funcionamento das funcionalidades;
- Navegação entre telas;
- Validação de formulários;
- Integração com Firebase;
- Tratamento de erros.

---

# 🔍 Tipos de Testes

## Testes Funcionais

Verificam se cada funcionalidade do sistema está funcionando conforme esperado.

Exemplos:

- Cadastro de usuário;
- Login;
- Agendamento;
- Cancelamento;
- Registro de pagamento.

---

## Testes de Interface

Avaliam a experiência do usuário.

Serão observados:

- Organização das telas;
- Alinhamento dos componentes;
- Responsividade;
- Legibilidade.

---

## Testes de Validação

Verificam se os formulários aceitam apenas informações válidas.

Exemplos:

- Campos obrigatórios;
- Formato de e-mail;
- Senha mínima;
- Telefone válido.

---

## Testes de Integração

Verificam a comunicação entre o aplicativo e o Firebase.

Exemplos:

- Login;
- Cadastro;
- Leitura de dados;
- Escrita de dados;
- Atualização de informações.

---

## Testes de Segurança

Verificam se usuários possuem acesso apenas às funcionalidades permitidas.

Exemplos:

- Cliente não acessa painel administrativo;
- Usuário não visualiza dados de outro cliente;
- Apenas administradores podem editar configurações.

---

# ✅ Casos de Teste

| ID | Caso de Teste | Resultado Esperado |
|----|---------------|--------------------|
| CT-01 | Cadastro de usuário | Conta criada com sucesso |
| CT-02 | Login válido | Usuário autenticado |
| CT-03 | Login inválido | Mensagem de erro |
| CT-04 | Agendar horário disponível | Agendamento realizado |
| CT-05 | Agendar horário ocupado | Operação bloqueada |
| CT-06 | Solicitar cancelamento antes de 1 hora | Solicitação enviada |
| CT-07 | Solicitar cancelamento após o limite | Operação bloqueada |
| CT-08 | Registrar pagamento | Pagamento salvo |
| CT-09 | Atualizar perfil | Informações atualizadas |
| CT-10 | Recuperar senha | E-mail enviado |

---

# ✔ Critérios de Aceitação

Uma funcionalidade será considerada concluída quando:

- Atender aos requisitos definidos;
- Não apresentar erros durante o uso;
- Validar corretamente os dados informados;
- Exibir mensagens claras ao usuário;
- Armazenar corretamente as informações no Firebase.

---

# ⚠ Tratamento de Erros

O aplicativo deverá apresentar mensagens claras sempre que ocorrer algum problema.

Exemplos:

- E-mail ou senha inválidos;
- Falha de conexão com a internet;
- Horário indisponível;
- Dados obrigatórios não preenchidos;
- Permissão insuficiente.

Sempre que possível, o usuário deverá receber orientações para corrigir o problema.

---

# 📌 Observações

Os testes serão executados durante todo o desenvolvimento do projeto.

Novos casos de teste poderão ser adicionados conforme novas funcionalidades forem implementadas.