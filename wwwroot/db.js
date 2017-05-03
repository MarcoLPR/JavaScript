var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./slaves.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, number NUMBER, email TEXT, city TEXT)");
  db.run("INSERT INTO contacts(name, number, email, city) VALUES ('Pedro', '3314196156', 'pedro@gmail.com', 'Zapopan')");
  db.run("INSERT INTO contacts(name, number, email, city) VALUES ('Juan', '3312121156', 'juan@gmail.com', 'Tlajomulco')");
  db.run("INSERT INTO contacts(name, number, email, city) VALUES ('Luis', '3314143156', 'luis@gmail.com', 'Tlaquepaque')");
  db.run("INSERT INTO contacts(name, number, email, city) VALUES ('Pepe', '3310003156', 'pepe@gmail.com', 'Tonala')");
  db.run("INSERT INTO contacts(name, number, email, city) VALUES ('Chuy', '3314132156', 'chuy@gmail.com', 'GDL')");
});
db.close();
