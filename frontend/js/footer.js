// Este código en JavaScript se encarga de crear dinámicamente el contenido de un pie de página (footer) y luego insertarlo en el documento HTML.
var footerContainer = document.getElementById("footer-container");
// Busca en el documento HTML un elemento con el atributo id igual a "footer-container" y lo almacena en la variable footerContainer.

// Crear el contenido del encabezado de navegación
//La variable (footerContent) contiene el código HTML del footer.
var footerContent = `
    <div id="footer-container"></div>
    <footer class="bg-dark text-white py-4">

      <div class="container">
          <nav class="row justify-content-center"> <!-- una fila -->
              <!-- Logo -->
              <div class="mb-4 col-md-4 text-center">
              <a href="index.html"
                  class="col-10 col-md-4 text-reset text-uppercase d-flex align-items-center mb-3 mb-md-0">
                  <img src="./img/logo_footer.png" alt="Logo" class="img-logo m-2">
                  EL FARO
              </a>
              
              <button class="btn btn-primary" onclick="autor()">
                DESARROLLADOR
              </button>
            </div>
              <!-- Menu -->
              <ul class="col-10 col-md-4 list-unstyled">
                <li class="font-weight-bold text-uppercase py-2">Secciones</li>
                <li><a href="https://www.tematika.com/musica" target="_blank" class="text-reset">Música</a></li>
                <li><a href="https://www.tematika.com/peliculas" target="_blank" class="text-reset">Peliculas</a></li>
                <li><a href="https://www.tematika.com/pasatiempos" target="_blank" class="text-reset">Pasatiempos</a></li>
            </ul>

              <!-- <redes sociales -->
              <ul class="col-10 col-md-4 list-unstyled">
                  <li class="font-weight-bold text-uppercase p-2">Seguinos!</li>
                  <li class="d-flex justify-content-between p-3">
                      <!-- FB -->
                      <a href="https://www.facebook.com/?locale=es_LA" target="_blank" class="text-reset">
                          <i class="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <!-- Instagram -->
                      <a href="https://www.instagram.com/" target="_blank" class="text-reset">
                          <i class="fab fa-instagram fa-lg"></i>
                      </a>
                      <!-- Twitter -->
                      <a href="https://twitter.com/" target="_blank" class="text-reset">
                          <i class="fab fa-twitter fa-lg"></i>
                      </a>
                  </li>
              </ul>
          </nav>
      </div>
      <div class="col-xs-12 col-md-6 col-lg-4">
        <a href="https://api.whatsapp.com/send?phone=2901416486" class="float" target="_blank">
          <i class="fab fa-whatsapp my-float"></i>
        </a>
      </div>
  </footer>
`;

// Asignar el contenido al contenedor del encabezado de navegación
footerContainer.innerHTML = footerContent;
//El contenido en footerContent lo asigna como el HTML interno del elemento con id "footer-container"

