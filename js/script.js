const ENVIAR_FORMULARIO = () => {
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;

        const data = {
            nombre: nombre,
            apellido: apellido,
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
}

document.addEventListener("DOMContentLoaded", ENVIAR_FORMULARIO);

