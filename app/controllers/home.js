module.exports.index = function(application, req, res) {

  var db = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(db);

  noticiasModel.get5UltimasNoticias(function(error, result) {
    res.render('home/index', {noticias: result});
  });
}
