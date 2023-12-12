// Contenido de buscador.js
new Vue({
    el: '#app',
    data: {
        libros: [],
        busqueda: '',
    },
    methods: {
        realizarBusqueda(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

            // Filtrar los libros basándote en la búsqueda
            const busquedaMinuscula = this.busqueda.toLowerCase();
            this.librosFiltrados = this.libros.filter(libro => {
                return (
                    libro.nombre.toLowerCase().includes(busquedaMinuscula) ||
                    libro.autor.toLowerCase().includes(busquedaMinuscula) ||
                    libro.descripcion.toLowerCase().includes(busquedaMinuscula)
                    // Agrega más criterios de búsqueda si es necesario
                );
            });
        },
    },
    mounted() {
        //fetch('http://localhost:5000/libros/search/')
        fetch ('http://scanosa.pythonanywhere.com/libros/search/')
            .then(response => response.json())
            .then(data => {
                this.libros = data;
            })
            .catch(error => {
                console.error('Error al obtener los libros:', error);
            });
    },
});



