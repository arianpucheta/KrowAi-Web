// ---------RESPONSIBE HEADER----------


let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("miHeader").classList.add("visible");
        document.getElementById("miHeader").classList.remove("invisible");
    } else {
        document.getElementById("miHeader").classList.add("invisible");
        document.getElementById("miHeader").classList.remove("visible");
    }

    prevScrollPos = currentScrollPos;
};




// -----------INFORMACION DE CATEGORIAS--------------







// -------------Informacion de productos------------

// NUMERO 1

function enviarMensajeWhatsApp(nombreProducto, precioProducto) {
    const numeroTelefono = '541136479845';
    const mensaje = `Hola!, estoy interesado/a en el cambio de modulo con un descuento que obtuve de la web!!`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
    window.open(url, '_blank');
}

// NUMERO 2 PARA CONTACTAR SOBRE UN LUGAR EN LA PLATAFORMA

function enviarMensajeWhatsApp2 () {
    const numeroTelefono = '541136479845';
    const mensaje = `Hola!, me gustaria saber mas informacion sobre como formar parte de un espacio para publicar en la plataforma`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
    window.open(url, '_blank');
}



//----------------- FUNCION DE BUSQUEDA --------------------------



document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results-container');
    const searchForm = document.getElementById('search-form');
    const searchButton = document.getElementById('search-button');

    // Guarda el color original del texto del placeholder
    const originalPlaceholderColor = getComputedStyle(searchInput).getPropertyValue('');

    // Simula una lista de datos (puedes reemplazar esto con tu conjunto de datos real)
    const data = [
        { title: 'Resultado 1', content: 'Descripción del resultado 1.' },
        { title: 'Resultado 2', content: 'Descripción del resultado 2.' },
        // Agrega más datos según sea necesario
    ];

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        performSearch();
    });

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        performSearch();
    });

    async function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredResults = filterResults(data, searchTerm);
        displayResults(filteredResults);

        // Envía la información de búsqueda al servidor usando fetch
        try {
            const response = await fetch('/tu_ruta_del_servidor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ searchTerm: searchTerm }),
            });

            if (response.ok) {
                console.log('Búsqueda enviada exitosamente al servidor.');
            } else {
                console.error('Error al enviar la búsqueda al servidor.');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    function filterResults(data, searchTerm) {
        return data.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.content.toLowerCase().includes(searchTerm)
        );
    }

    // function displayResults(results) {
    //     searchResults.innerHTML = ''; // Limpiar resultados anteriores

    //     if (results.length === 0) {
    //         searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
    //     } else {
    //         results.forEach(result => {
    //             const resultElement = document.createElement('div');
    //             resultElement.innerHTML = `<h3>${result.title}</h3><p>${result.content}</p>`;
    //             searchResults.appendChild(resultElement);
    //         });
    //     }
    // }
});



// ------------------------------------------------------





