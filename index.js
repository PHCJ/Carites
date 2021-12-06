//index.js
const express = require('express');
//npm i express-session
const session = require('express-session');
//npm install consign
var consign = require('consign');

const app = express();
//toda vez será criado um código para a sessão
app.use(session({secret: '1111111111111111'}));

//npm install body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var path = require('path');
app.set('views', path.join(__dirname , '/view/usuariopf'));
app.set('views', path.join(__dirname , '/view/usuariopj'));


consign().include('controller/routes').into(app);

    app.listen(8081, function(){
        console.info("Servidor funcionando");
})

