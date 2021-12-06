function validar_login(){

	//JS - validar login 
	//Verifica se os campos estão vazios e se a senha está dentro dos parâmetros estabelecidos

	var email = formulario.email; 
	var senha = formulario.senha;

	//Verifica se o campo está vazio
	if(email.value===""){
		alert("Digite seu e-mail!");
		email.focus();
		return false;
	}

	if (senha.value===""){
		alert("Digite sua senha!");
		senha.focus();
		return false;
	}


	//Expressão regular
	var regex = /(?=(?:.*?[A-Z]))(?=(?:.*?[0-9]))(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&]*$/;

	//Se a variável regex for diferente da senha exibir mensagem 
	if(!regex.exec(senha.value)){
		alert("Senha inválida: A senha deve conter maiúsculas, minúsculas, números e caracteres especiais");
		senha.focus();
		return false;
	}



		//"Verifica a senha" isso n está funcionando, fiz com html: 

		if(senha.value.length<6 && senha.value.length>12){
			alert("Senha inválida: A senha deve conter no mínimo 6 e no máximo 12 caracteres.");
			senha.focus();
			return false;
		}

}