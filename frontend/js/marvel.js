//Se crea un objeto llamado marvel. que contiene el método `render`(que se encarga de obtener los datos de la API de Marvel y mostrarlos en la página web.)
const marvel = {
    render: () => {
        
// Se define la URL de la API de Marvel en la constante urlAPI. Esta URL incluye parámetros como un timestamp (ts), una clave de API (apikey), y un hash para autenticar la solicitud.
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=a7b7a94c4db731b7ff25e05ac8e4906e&hash=f0d61ffd881e7e6391ab9df53b08ceba'; 
      const container = document.querySelector('#marvel-row'); //Se selecciona un elemento HTML con el ID marvel-row y se almacena en la variable container, donde se mostrarán los datos obtenidos de la API.


// Se crea una variable llamada contentHTML que se utilizará para almacenar el HTML que se generará dinámicamente.
      let contentHTML = '';
  
      fetch(urlAPI) //Acá se está haciendo una solicitud a la API de Marvel utilizando la función `fetch`.
        .then(res => res.json())// Cuando la solicitud se completa, se convierte la respuesta en un objeto JSON.
        .then((json) => { // Una vez que los datos se han convertido en JSON, se ejecuta esta función. Aquí es donde se procesan los datos y se muestran en la página web.

          for (const hero of json.data.results) { // Este es un bucle que recorre cada "héroe" (en realidad, cada evento) en los resultados de la API.

            let urlHero = hero.urls[0].url; // se obtiene la URL del primer evento.

             // se crea el HTML que se mostrará en la página web. Se está utilizando la información del evento para llenar los detalles.
            // contentHTML += se utiliza para concatenar (agregar) contenido a una variable llamada contentHTML. El operador += toma el valor actual de la variable y le agrega el nuevo contenido a la derecha del operador. 
            contentHTML += ` 
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.title}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML; 
          // se inserta en el HTML creado en el elemento `container` seleccionado anteriormente.
        })
    }
  };
  marvel.render(); // se llama a la método `render` del objeto `marvel` para iniciar todo el proceso.


  // HASH: 1bf1265b91bc996ae4ac7aa4c85f45e3e93bcd7daa7b7a94c4db731b7ff25e05ac8e4906e
