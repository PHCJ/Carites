// cadastro Usuario PF

const seguranca = require('../../model/components/seguranca');
const usuarioBanco = require('../../model/repositories/usuario-bd-pf');
var UsuarioLogin = require("../../model/entities/Usuariopf");
module.exports = function(app){

app.post('/cadastro_pf/usuariopf/salvar', (req, res) => {
   try {
    usuarioBanco.insertUsuariopf({nome: req.body.nome ,
      senha: seguranca.ocultarSenha( req.body.senha)});
    res.render('cadastro_pf', { title: 'Cadastro', mensagem: 'Usuário PF Cadastrado com sucesso' });
   } catch (error) {
    res.render('cadastro_pf', { title: 'Cadastro', mensagem: 'Erro no cadastro' });
   }

  });

/* GET login page. */
app.get('/cadastro_pf', (req, res) => {
  res.render('cadastro_pf', { title: 'Cadastro', mensagem: null });
});


app.get('/delete/usuariopf/:idpf', async (req, res, next) =>{
  try{
    var idpf = req.params.idpf;
    await usuarioBanco.deleteUsuariopf(idpf);
    const docs = await usuarioBanco.selectUsuariopf();
    res.render('lista_pf' , {mensagem: 'Usuario PF excluído com sucesso' , docs});
  } catch (err) {
    next(err);
  }

});

 app.get('/lista/usuariopf', async (req, res, next) => {
  try {
  const docs = await usuarioBanco.selectUsuariopf();
  res.render('lista_pf', { mensagem: 'Lista de usuários PF', docs });
  } catch (err) {
  next(err);
  }
  });
};