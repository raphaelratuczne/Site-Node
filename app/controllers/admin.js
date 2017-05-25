module.exports.formulario_inclusao_noticia = function(application, req, res) {
  res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res) {
  var noticia = req.body;
  // res.send(noticia);

  req.assert('titulo','titulo é obrigatorio!').notEmpty();
  req.assert('resumo','resumo é obrigatorio!').notEmpty();
  req.assert('resumo','resumo deve conter entre 10 e 100 caracteres!').len(10,100);
  req.assert('autor','autor é obrigatorio!').notEmpty();
  req.assert('data_noticia','data é obrigatorio!').notEmpty().isDate({format: 'YYY-MM-DD'});
  req.assert('noticia','noticia é obrigatorio!').notEmpty();

  var erros = req.validationErrors();

  if (erros) {
    res.render('admin/form_add_noticia', {validacao: erros, noticia:noticia});
    return;
  }

  var db = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(db);

  noticiasModel.salvarNoticia(noticia, function(error, result) {
    res.redirect('/noticias');
  });
}
