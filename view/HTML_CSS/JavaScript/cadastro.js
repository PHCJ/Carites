function validar_cadastro() {

	//JS - validar cadastro
	//Verifica se o CPF/CNPJ é número e se a senha segue os parâmetros determinados 

	var cpf = cadastro.cpf;
	var senha = cadastro.senha;

	//Verifica se o tamanho de CPF/CPNJ não é 11 ou 14 
	if (cpf.value.length != 11 && cpf.value.length != 14) {
		alert("O campo CPF/CPNJ deve conter 11 ou 14 números!");
		cpf.focus();
		return false;
	}

	//Verifica as propriedades da senha
	if (senha.value.length < 6 && senha.value.length > 12) {
		alert("A senha deve conter no mínimo 6 e no máximo 12 caracteres");
		senha.focus();
		return false;
	}

	//Expressão regular
	var regex = /(?=(?:.*?[A-Z]))(?=(?:.*?[0-9]))(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&]*$/;

	//Se a variável regex for diferente da senha exibir mensagem 
	if (!regex.exec(senha.value)) {
		alert("A senha deve conter maiúsculas, minúsculas, números e caracteres especiais");
		senha.focus();
		return false;
	}

}


function aaa() {
		if ($('#pf').is(":checked")) {

		$('#precadastro').attr('action', './cadastro_pf.html');
		$('#precadastro').submit();

	} else if ($('#pj').is(":checked")) {

		$('#precadastro').attr('action', './cadastro_pj.html');
		$('#precadastro').submit();

	} else {
		alert("É necessário selecionar um dos dois campos!");
	}
}