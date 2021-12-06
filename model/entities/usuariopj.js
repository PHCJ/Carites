function usuariopj(nome, cnpj, razao, inscricao, telefone, site, email, senha, idpj) {
    this.idpj = idpj;
    this.nome = nome;
    this.cnpj = cnpj;
    this.razao = razao;
    this.inscricao = inscricao;
    this.telefone = telefone;
    this.site = site;
    this.email = email;
    this.senha = senha;
}

module.exports = usuariopj;