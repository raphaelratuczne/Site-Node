module.exports.noticias = function(application, req, res) {

  var db = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(db);

  noticiasModel.getNoticias(function(error, result) {
    res.render('noticias/noticias', {noticias: result});
  });
}

module.exports.noticia = function(application, req, res) {

  var db = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(db);

  var id = req.query;

  noticiasModel.getNoticia(id, function(error, result) {
    res.render('noticias/noticia', {noticia: result});
  });
}
