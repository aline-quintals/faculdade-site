const semestre = document.getElementById("semestre");

semestre.addEventListener("change", () => {

    const pagina = semestre.value;

    if (pagina !== "") {
        window.location.href = pagina;
    }

});

