Docker run -d --name mongodev mongo
Docker ps
Docker exec -it mongodev bash
mongosh
use BdTienda



db.createCollection("empleados");
db.empleados.insertMany({ "id_empleado": "001", "nombre": "José Santos" });
db.empleados .find()

db.pedidos.insertMany([{
    "nombre":"Juan",
    "idPedido":"PED001",
    "producto":"Zapatilla",
    "cantidad":2,
    "precio":234.90,
    "activo":true
},{
    "nombre":"Juan",
    "idPedido":"PED001",
    "producto":"Camisa",
    "cantidad":1,
    "precio":120.00,
    "activo":true
},{
    "nombre":"Juan",
    "idPedido":"PED001",
    "producto":"Medias",
    "cantidad":3,
    "precio":15.90,
    "activo":false
},{
    "nombre":"Jose",
    "idPedido":"PED002",
    "producto":"Polo",
    "cantidad":4,
    "precio":23.50,
    "activo":true
},{
    "nombre":"Jose",
    "idPedido":"PED002",
    "producto":"Sandalias",
    "cantidad":4,
    "precio":39.90,
    "activo":true
}])


db.pedidos.aggregate([{
    $project:{
        "item":{$toUpper:"$producto"},
        "precio":1,
        "cantidad":1,
        "subtotal":{$multiply:["$precio","$cantidad"]},
        "cantidadMas10":{$add:["$cantidad",10]}
    }
}])



