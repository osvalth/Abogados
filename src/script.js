document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

/* Efecto de rotación */
function rotateCard(card) {
    card.style.transform = "rotateY(180deg)";
}

function unrotateCard(card) {
    card.style.transform = "rotateY(0deg)";
}

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("mouseover", () => {
        rotateCard(tarjeta);
    });

    tarjeta.addEventListener("mouseout", () => {
        unrotateCard(tarjeta);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.getElementById("anterior");
    const nextButton = document.getElementById("siguiente");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    showImage(currentIndex);
});


document.addEventListener("DOMContentLoaded", function() {
    // Mostrar la lista de abogados con una pequeña animación
    const abogados = document.getElementById("abogados");
    abogados.style.opacity = "1";

    // Agregar evento para mostrar/ocultar la descripción de los abogados al hacer clic en la imagen principal
    const equipoImg = document.getElementById("equipo-img");
    let descripcionVisible = false;

    equipoImg.addEventListener("click", function() {
        if (descripcionVisible) {
            // Si la descripción está visible, ocultarla
            abogados.style.transform = "translateY(100%)";
            descripcionVisible = false;
        } else {
            // Si la descripción está oculta, mostrarla
            abogados.style.transform = "translateY(0)";
            descripcionVisible = true;
        }
    });
});
