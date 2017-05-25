function NoticiasDAO(db) {
  this._db = db;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._db.all('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback) {
  this._db.all('select * from noticias where id = ' + id.id, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._db.run('insert into noticias (id, titulo, noticia, resumo, autor, data_noticia) values (NULL, "'+noticia.titulo+'","'+noticia.noticia+'","'+noticia.resumo+'","'+noticia.autor+'","'+noticia.data_noticia+'")', callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
  this._db.all('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function() {
  return NoticiasDAO;
}
