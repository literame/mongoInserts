function copiarTexto() {
    var texto = document.getElementById("elemento").innerText;
    navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado al portapapeles");
    }, function(err) {
      console.error('Error al intentar copiar el texto: ', err);
    });
  }
  