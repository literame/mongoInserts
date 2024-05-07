{
    var miElemento = document.getElementById("elemento");
    var numeroConsulta= document.getElementById("numeroConsulta");
    var realizado = false;
    }

function copiarTexto() {
    var texto = document.getElementById("elemento").innerText;
    navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado al portapapeles");
    }, function(err) {
      console.error('Error al intentar copiar el texto: ', err);
    });
  }
  