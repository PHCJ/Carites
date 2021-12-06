function validar_doacao(){

	var cpf = doacao.cpf;

	//Verifica se o conteúdo de CPF/CNPJ não é um número 
	if(isNaN(cpf.value)){
		alert("O campo CPF/CNPJ deve conter apenas números!");
		cpf.focus();
		return false;
	}

	//Verifica se o tamanho de CPF/CPNJ não é 11 ou 14 
	if(cpf.value.length!=11 && cpf.value.length!=14){
		alert("O campo CPF/CPNJ deve conter 11 ou 14 números!");
		cpf.focus();
		return false;
	}
}
