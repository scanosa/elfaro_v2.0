// Obtener el contenedor del encabezado de navegación
var navbarContainer = document.getElementById("navbar-container");

// Crear el contenido del encabezado de navegación
var navbarContent = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <span class="name navbar-brand border-top border-bottom border-dark">EL FARO</span>
      </li>
    </ul></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="novedades.html">NOVEDADES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="terror.html">TERROR</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="comics.html">COMICS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="c_ficcion.html">CIENCIA FICCIÓN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="catalogo.html">CATALOGO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contacto.html">CONTACTO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="catalogo_admin.html" onclick="verificarContrasena()">ACCESO</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
function verificarContrasena() {
  var contrasena = prompt("Ingrese la contraseña:");

  $.ajax({
    url: "/acceso",
    type: "POST",
    data: { contrasena: contrasena },
    success: function(response) {
      // Manejar la respuesta del servidor
      console.log(response);
    },
    error: function(error) {
      // Manejar el error
      console.log(error);
    }
  });
}




// Asignar el contenido al contenedor del encabezado de navegación
navbarContainer.innerHTML = navbarContent;