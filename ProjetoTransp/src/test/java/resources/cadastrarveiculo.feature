Feature: Cadastro de Veículo
  Como um usuário
  Eu quero cadastrar um veículo
  Para registrá-lo no meu banco de dados

Background: :
  Given aplicação foi acessada com sucesso
  Given selecionada a funcionalidade Cadastro de Veículo

Scenario: Inserir um veículo com sucesso
  When  inserir uma placa válida
  When   selecionar um tipo de veículo
  When   inserir um fabricante válido
  When   inserir um modelo válido
  When   inserir um ano fabricação válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  veículo deve ser cadastrado com sucesso


Scenario: Inserir um veículo sem Placa
  When  selecionar um tipo de veículo
  When  inserir um fabricante válido
  When  inserir um modelo válido
  When  inserir um ano fabricação válido
  When  inserir um ano modelo válido
  When  clicar em Salvar
  Then  usuário deve ser notificado para obrigatoriedade do campo Placa

Scenario: Inserir um veículo sem Tipo veículo
  When  inserir uma placa válida
  When  inserir um fabricante válido
  When  inserir um modelo válido
  When  inserir um ano fabricação válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  usuário deve ser notificado para obrigatoriedade do campo Tipo de veículo


Scenario: Inserir um veículo com Placa inválida
  When  inserir uma placa inválida
  When   selecionar um tipo de veículo
  When   inserir um fabricante válido
  When   inserir um modelo válido
  When   inserir um ano fabricação válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  usuário deve ser notificado para o preenchimento correto do campo Placa

Scenario: Inserir um veículo com Placa duplicada
  When  inserir uma placa já cadastrada
  When   selecionar um tipo de veículo
  When   inserir um fabricante válido
  When   inserir um modelo válido
  When   inserir um ano fabricação válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  usuário deve ser notificado para a existência de cadastro com a placa informada

Scenario: Inserir um veículo sem Fabricante
  When  inserir uma placa válida
  When   selecionar um tipo de veículo
  When   inserir um modelo válido
  When   inserir um ano fabricação válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  usuário deve ser notificado para obrigatoriedade do campo Fabricante


Scenario: Inserir um veículo com Fabricante inválido
  When  inserir uma placa válida
  When   selecionar um tipo de veículo
  When   inserir um fabricante inválido
  When   inserir um modelo válido
  When   inserir um ano fabricação válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  usuário deve ser notificado para o preenchimento correto do campo Fabricante

Scenario: Inserir um veículo sem Ano de Fabricação
  When  inserir uma placa válida
  When   selecionar um tipo de veículo
  When   inserir um fabricante válido
  When   inserir um modelo válido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  veículo deve ser cadastrado com sucesso


Scenario: Inserir um veículo com Ano de Fabricação Inválido
  When  inserir uma placa válida
  When   selecionar um tipo de veículo
  When   inserir um fabricante válido
  When   inserir um modelo válido
  When   inserir um ano fabricação inválido
  When   inserir um ano modelo válido
  When   clicar em Salvar
  Then  usuário deve ser notificado para o preenchimento correto do campo Ano de Fabricação










