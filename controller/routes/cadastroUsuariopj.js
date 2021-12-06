// cadastro Usuario PJ

const seguranca = require('../../model/components/seguranca');
const usuarioBanco = require('../../model/repositories/usuario-bd-pj');
//var UsuarioLogin = require("../../model/entities/Usuariopj");
module.exports = function(app){

app.post('/cadastro_pj/usuariopj/salvar', (req, res) => {
   try {
    usuarioBanco.insertUsuariopj({nome: req.body.nome ,
      senha: seguranca.ocultarSenha( req.body.senha)});
    res.render('cadastro_pj', { title: 'Cadastro', mensagem: 'Usuário PJ Cadastrado com sucesso' });
   } catch (error) {
    res.render('cadastro_pj', { title: 'Cadastro', mensagem: 'Erro no cadastro' });
   }
  });

/* GET login page. */
app.get('/cadastro_pj', (req, res) => {
  res.render('cadastro_pj', { title: 'Cadastro', mensagem: null });
});

app.get('/delete/usuariopj/:idpj', async (req, res, next) =>{
  try{
    var idpj = req.params.idpj;
    await usuarioBanco.deleteUsuariopj(idpj);
    const docs = await usuarioBanco.selectUsuariopj();
    res.render('lista_pj' , {mensagem: 'Usuario PJ excluído com sucesso' , docs});
  } catch (err) {
    next(err);
  }

});

 app.get('/lista/usuariopj', async (req, res, next) => {
  try {
    const docs = await usuarioBanco.selectUsuariopj();
    res.render('lista_pj', { mensagem: 'Lista de usuários PJ', docs});
  }catch (err) {
  next(err);
  }
  });
};