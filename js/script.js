

var listaNombres = ["Juan", "María", "Carlos", "Laura"];
var listaApellidos = ["RAMIERE", "Apelayo", "Jonte", "Juniperro"];
var listaEdades = [21,24,25,27,32]


var ingresarBD =  `db.clientes.insertOne([`;

var definirAtributos = `{
"nombre":"${listaNombres[1]}",
"Apellido":"${listaApellidos[1]}",
"edad":"${listaEdades[1]}"},`;




miElemento.innerHTML += ingresarBD;
var cierreConsulta = `]);`;
var cantidadConsulta = 5000;


// Insertar 500 documentos
for (let i = 0; i <= cantidadConsulta; i++) {
    comando = definirAtributos;
    miElemento.innerHTML += comando;
    realizado = true;
    if(i == cantidadConsulta){
      miElemento.innerHTML += cierreConsulta;
      numeroConsulta.innerHTML += cantidadConsulta;
    }
}





