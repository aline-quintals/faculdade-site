const caderno = document.getElementById("caderno");

if (caderno) {

    const pagina = window.location.pathname;

    caderno.value =
        localStorage.getItem(pagina) || "";

    caderno.addEventListener("input", () => {

        localStorage.setItem(
            pagina,
            caderno.value
        );

    });

}
const btnLimpar =
document.getElementById("limpar-anotacoes");

if (btnLimpar) {

    btnLimpar.addEventListener("click", () => {

        if(confirm("Deseja apagar as anotações?")){

            caderno.value = "";

            localStorage.removeItem(
                window.location.pathname
            );

        }

    });

}