document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos referencias a los elementos HTML
    const tycButton = document.getElementById("tycButton");
    const espnButton = document.getElementById("espnButton");
    const tvPublicaButton = document.getElementById("tvPublicaButton");
    const fox1button = document.getElementById("fox1button");
    const fox3Button = document.getElementById("fox3Button");
    const TNTButton = document.getElementById("TNTButton");
    // Agregamos eventos de clic a los botones
    tycButton.addEventListener("click", function () {
        // Lógica para redirigir al canal TyC Sports
        alert("Ver TyC Sports");
        window.location.href = "https://librefutboltv.com/home/en-vivo/tyc-sports/";
    });

    espnButton.addEventListener("click", function () {
        // Lógica para redirigir al canal ESPN Premium
        alert("Ver ESPN Premium");
        window.location.href = "https://librefutboltv.com/home/en-vivo/espn-premium/";
    });

    tvPublicaButton.addEventListener("click", function () {
        // Lógica para redirigir al canal TV Pública
        alert("Ver TV Pública");
        window.location.href = "https://www.tvpublica.com.ar/";
    });
  // Agregamos eventos de clic a los botones
    fox1button.addEventListener("click", function () {
        // Lógica para redirigir al canal TyC Sports
        alert("Ver Fox ");
        window.location.href = "https://librefutboltv.com/home/en-vivo/fox-sports-1/";
    });

    fox3Button.addEventListener("click", function () {
        // Lógica para redirigir al canal ESPN Premium
        alert("Ver Fox 3");
        window.location.href = "https://librefutboltv.com/home/en-vivo/fox-sports-3/";
    });

    TNTButton.addEventListener("click", function () {
        // Lógica para redirigir al canal TV Pública
        alert("Ver TNT sports");
        window.location.href = "https://librefutboltv.com/home/en-vivo/tnt-sports-online/";
    });
    // Agregamos evento de clic a la lista de partidos
    partidosList.addEventListener("click", function (event) {
        // Verificamos si se hizo clic en un elemento de la lista de partidos
        if (event.target.tagName === "LI") {
            // Lógica para mostrar los canales disponibles para el partido seleccionado
            const partidoSeleccionado = event.target.textContent;
            mostrarCanales(partidoSeleccionado);
        }
    });

    // Función para mostrar los canales disponibles para un partido
    function mostrarCanales(partido) {
        // Lógica para mostrar los canales para el partido seleccionado
        alert("Canales disponibles para " + partido + ": TyC Sports, ESPN Premium, TV Pública");
    }
});

