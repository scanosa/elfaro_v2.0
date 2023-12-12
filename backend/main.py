from flask import Flask, jsonify, request, request
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import or_



app = Flask(__name__)
CORS(app)

#CREATE DATABASE elfaro CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


app.config["SQLALCHEMY_DATABASE_URI"]='mysql+pymysql://test:test@localhost/elfaro'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"]=False
db=SQLAlchemy(app)
ma=Marshmallow(app)

class Libro(db.Model):
   id=db.Column(db.Integer, primary_key=True)
   nombre=db.Column(db.String(100))
   autor=db.Column(db.String(255))
   anio=db.Column(db.Integer)
   link=db.Column(db.String(400))
   descripcion=db.Column(db.String(400))
   genero=db.Column(db.String(100))
   isbn=db.Column(db.String(255))
   stock=db.Column(db.Integer)
   precio=db.Column(db.Float)
   img=db.Column(db.String(400))
   editorial=db.Column(db.String(255))
   novedad=db.Column(db.Boolean, default=False)

   def __init__(self, nombre, autor, anio, link, descripcion, genero, isbn, stock, precio, img, editorial, novedad):
      self.nombre = nombre
      self.autor = autor
      self.anio = anio
      self.link = link
      self.descripcion = descripcion
      self.genero = genero
      self.isbn = isbn
      self.stock = stock
      self.precio = precio
      self.img = img
      self.editorial = editorial
      self.novedad = novedad

with app.app_context():
   db.create_all()

class LibroSchema(ma.Schema):
   class Meta:
      fields=('id', 'nombre', 'autor', 'anio', 'link', 'descripcion', 'genero', 'isbn', 'stock', 'precio', 'img', 'editorial', 'novedad')

libro_schema=LibroSchema()
libros_schema=LibroSchema(many=True)

@app.route('/libros/all', methods=['GET'])
def get_Libros():
   all_libros=Libro.query.all()
   result=libros_schema.dump(all_libros)
   return jsonify(result)

@app.route('/libros/search/<string:query>', methods=['GET'])
def search_libros(query):
    libros_resultado = Libro.query.filter(
        or_(Libro.nombre.ilike(f'%{query}%'), Libro.autor.ilike(f'%{query}%'))
    ).all()
    result = libros_schema.dump(libros_resultado)
    return jsonify(result)

@app.route('/libros/<id>', methods=['GET'])
def get_libro(id):
    libro = Libro.query.get(id)
    return libro_schema.jsonify(libro)

@app.route('/libros/<id>',methods=['DELETE'])
def delete_libro(id):
   libro=Libro.query.get(id)
   db.session.delete(libro)
   db.session.commit()
   return libro_schema.jsonify(libro)

@app.route('/libros',methods=['POST'])
def create_libro():
        new_libro = Libro(
            nombre=request.json['nombre'],
            autor=request.json['autor'],
            anio=request.json['anio'],
            link=request.json['link'],
            descripcion=request.json['descripcion'],
            genero=request.json['genero'],
            isbn=request.json['isbn'],
            stock=request.json['stock'],
            precio=request.json['precio'],
            img=request.json['img'],
            editorial=request.json['editorial'],
            novedad=request.json['novedad']
        )

        # Agregar y confirmar la transacción
        db.session.add(new_libro)
        db.session.commit()
        return libro_schema.jsonify(new_libro), 201

@app.route('/libros/<id>', methods=['PUT'])
def update_libro(id):
    libro = Libro.query.get(id)

    nombre=request.json['nombre'],
    autor=request.json['autor'],
    anio=request.json['anio'],
    link=request.json['link'],
    descripcion=request.json['descripcion'],
    genero=request.json['genero'],
    isbn=request.json['isbn'],
    stock=request.json['stock'],
    precio=request.json['precio'],
    img=request.json['img'],
    editorial=request.json['editorial'],
    novedad=request.json['novedad']

    libro.nombre = nombre
    libro.autor = autor
    libro.anio = anio
    libro.link = link
    libro.descripcion = descripcion
    libro.genero = genero
    libro.isbn = isbn
    libro.stock = stock
    libro.precio = precio
    libro.img = img
    libro.editorial = editorial
    libro.novedad = novedad

    db.session.commit()
    return libro_schema.jsonify(libro)

@app.route('/acceso', methods=['POST'])
def verificar_contrasena():
    contrasena = request.form.get('contrasena')

    # Verificar la contraseña ingresada
    if contrasena == 'password':
        return render_template('catalogo_admin.html')
    else:
        return 'Contraseña incorrecta'

if __name__ =='__main__':
  app.run(debug=True, port=5000)

