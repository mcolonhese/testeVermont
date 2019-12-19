$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/cadastrarveiculo.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastro de Veículo",
  "description": "Como um usuário\r\nEu quero cadastrar um veículo\r\nPara registrá-lo no meu banco de dados",
  "id": "cadastro-de-veículo",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 67089100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Inserir um veículo com sucesso",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "inserir uma placa válida",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "veículo deve ser cadastrado com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaVálida()"
});
formatter.result({
  "duration": 16201,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 13699,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 12401,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.veículoDeveSerCadastradoComSucesso()"
});
formatter.result({
  "duration": 12601,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 17601,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Inserir um veículo sem Placa",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-sem-placa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "usuário deve ser notificado para obrigatoriedade do campo Placa",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 15800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaObrigatoriedadeDoCampoPlaca()"
});
formatter.result({
  "duration": 25101,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Inserir um veículo sem Tipo veículo",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-sem-tipo-veículo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "inserir uma placa válida",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "usuário deve ser notificado para obrigatoriedade do campo Tipo de veículo",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaVálida()"
});
formatter.result({
  "duration": 15400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 11701,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 10999,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 12299,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 10101,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaObrigatoriedadeDoCampoTipoDeVeículo()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Inserir um veículo com Placa inválida",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-com-placa-inválida",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "inserir uma placa inválida",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "usuário deve ser notificado para o preenchimento correto do campo Placa",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaInválida()"
});
formatter.result({
  "duration": 29601,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 14300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 13300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 8900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 8200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaOPreenchimentoCorretoDoCampoPlaca()"
});
formatter.result({
  "duration": 9899,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 9399,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Inserir um veículo com Placa duplicada",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-com-placa-duplicada",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "inserir uma placa já cadastrada",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "usuário deve ser notificado para a existência de cadastro com a placa informada",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaJáCadastrada()"
});
formatter.result({
  "duration": 14100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 8699,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 8300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 17301,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 29601,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 14101,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaAExistênciaDeCadastroComAPlacaInformada()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 61200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Inserir um veículo sem Fabricante",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-sem-fabricante",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "inserir uma placa válida",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "usuário deve ser notificado para obrigatoriedade do campo Fabricante",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaVálida()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 14601,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 13400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 12399,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 13900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 9900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaObrigatoriedadeDoCampoFabricante()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 11201,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Inserir um veículo com Fabricante inválido",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-com-fabricante-inválido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "inserir uma placa válida",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "inserir um fabricante inválido",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "inserir um ano fabricação válido",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "usuário deve ser notificado para o preenchimento correto do campo Fabricante",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaVálida()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 13500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteInválido()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoVálido()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 13400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 16999,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaOPreenchimentoCorretoDoCampoFabricante()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 10801,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Inserir um veículo sem Ano de Fabricação",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-sem-ano-de-fabricação",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "inserir uma placa válida",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "veículo deve ser cadastrado com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaVálida()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 10001,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 9300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 8800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 9699,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 12599,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.veículoDeveSerCadastradoComSucesso()"
});
formatter.result({
  "duration": 11001,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": ":",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "aplicação foi acessada com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "selecionada a funcionalidade Cadastro de Veículo",
  "keyword": "Given "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.aplicaçãoFoiAcessadaComSucesso()"
});
formatter.result({
  "duration": 47801,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionadaAFuncionalidadeCadastroDeVeículo()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Inserir um veículo com Ano de Fabricação Inválido",
  "description": "",
  "id": "cadastro-de-veículo;inserir-um-veículo-com-ano-de-fabricação-inválido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "inserir uma placa válida",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "selecionar um tipo de veículo",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "inserir um fabricante válido",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "inserir um modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "inserir um ano fabricação inválido",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "inserir um ano modelo válido",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "clicar em Salvar",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "usuário deve ser notificado para o preenchimento correto do campo Ano de Fabricação",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmaPlacaVálida()"
});
formatter.result({
  "duration": 11100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.selecionarUmTipoDeVeículo()"
});
formatter.result({
  "duration": 8299,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmFabricanteVálido()"
});
formatter.result({
  "duration": 8000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmModeloVálido()"
});
formatter.result({
  "duration": 7799,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoFabricaçãoInválido()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.inserirUmAnoModeloVálido()"
});
formatter.result({
  "duration": 7800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.clicarEmSalvar()"
});
formatter.result({
  "duration": 8800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarVeiculoSteps.usuárioDeveSerNotificadoParaOPreenchimentoCorretoDoCampoAnoDeFabricação()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
});