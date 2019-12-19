Feature: Cadastro de Veículo
  Como um usuário
  Eu quero cadastrar um veículo
  Para registrá-lo no meu banco de dados

Scenario: Inserir um veículo com sucesso
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa válida
  And   selecionar um tipo de veículo
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  veículo deve ser cadastrado com sucesso

Scenario: Inserir um veículo sem Placa
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  And   selecionar um tipo de veículo
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para obrigatoriedade do campo Placa

Scenario: Inserir um veículo sem Tipo veículo
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa válida
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para obrigatoriedade do campo Tipo de veículo


Scenario: Inserir um veículo com Placa inválida
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa inválida
  And   selecionar um tipo de veículo
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para o preenchimento correto do campo Placa


Scenario: Inserir um veículo com Placa duplicada
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa já cadastrada
  And   selecionar um tipo de veículo
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para a existência de cadastro com a placa informada

Scenario: Inserir um veículo sem Fabricante
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa válida
  And   selecionar um tipo de veículo
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para obrigatoriedade do campo Fabricante

Scenario: Inserir um veículo com Fabricante inválido
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa válida
  And   selecionar um tipo de veículo
  And   inserir um fabricante inválido
  And   inserir um modelo válido
  And   inserir um ano fabricação válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para o preenchimento correto do campo Fabricante

Scenario: Inserir um veículo sem Ano de Fabricação
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa válida
  And   selecionar um tipo de veículo
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  veículo deve ser cadastrado com sucesso

Scenario: Inserir um veículo com Ano de Fabricação Inválido
  Given a aplicação foi acessada com sucesso
  And   selecionada a funcionalidade Cadastro de Veículo
  When  inserir uma placa válida
  And   selecionar um tipo de veículo
  And   inserir um fabricante válido
  And   inserir um modelo válido
  And   inserir um ano fabricação inválido
  And   inserir um ano modelo válido
  And   clicar em Salvar
  Then  usuário deve ser notificado para o preenchimento correto do campo Ano de Fabricação










