var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./slaves.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, name TEXT, number NUMBER, email TEXT, city TEXT)");
  db.run("INSERT INTO contacts(id, name, number, email, city) VALUES ('1', 'Pedro', '3314196156', 'pedro@gmail.com', 'Zapopan')");
  db.run("INSERT INTO contacts(id, name, number, email, city) VALUES ('2', 'Juan', '3312121156', 'juan@gmail.com', 'Tlajomulco')");
  db.run("INSERT INTO contacts(id, name, number, email, city) VALUES ('3', 'Luis', '3314143156', 'luis@gmail.com', 'Tlaquepaque')");
  db.run("INSERT INTO contacts(id, name, number, email, city) VALUES ('4', 'Pepe', '3310003156', 'pepe@gmail.com', 'Tonala')");
  db.run("INSERT INTO contacts(id, name, number, email, city) VALUES ('5', 'Chuy', '3314132156', 'chuy@gmail.com', 'GDL')");
});
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS login (username TEXT, password TEXT)");
})
db.close();
