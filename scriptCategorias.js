document.getElementById("txtBusca").addEventListener("input", function() {
  var termo = this.value.toLowerCase();
  var categorias = document.getElementsByClassName("categorias");

  for (var i = 0; i < categorias.length; i++) {
      var categoria = categorias[i];
      var h1 = categoria.getElementsByTagName("h1")[0];
      var texto = h1.textContent.toLowerCase();

      if (texto.indexOf(termo) > -1) {
          categoria.style.display = "block";
      } else {
          categoria.style.display = "none";
      }
  }
});