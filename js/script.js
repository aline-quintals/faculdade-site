const semestre = document.getElementById("primeiro-semestre");

semestre.addEventListener("change", () => {

    const pagina = semestre.value;

    if (pagina !== "") {
        window.location.href = pagina;
    }

});

