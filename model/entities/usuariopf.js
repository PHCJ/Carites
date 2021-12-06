function usuariopf(nome, cpf, data, celular, email, senha, idpf) {
    this.idpf = idpf;
    this.nome = nome;
    this.cpf = cpf;
    this.data = data;
    this.celular = celular;
    this.email = email;
    this.senha = senha;
}

module.exports = usuariopf;